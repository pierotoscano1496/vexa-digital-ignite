import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const SERVICES = [
  "Desarrollo Web",
  "Domotica Inteligente",
  "Automatizacion de Procesos",
  "Energia Renovable",
  "Otro",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre."),
  email: z.string().trim().email("Ingresa un email valido."),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  service: z.enum(SERVICES, { message: "Selecciona un servicio." }),
  message: z
    .string()
    .trim()
    .min(10, "Cuentanos un poco mas (minimo 10 caracteres)."),
  consent: z
    .boolean()
    .refine((v) => v, { message: "Debes aceptar para enviar la consulta." }),
  // Honeypot: should remain empty. Helps reduce spam in static deployments.
  website: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

function buildMailtoHref(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${to}?${params.toString()}`;
}

function buildWhatsappHref(phoneE164NoPlus: string, text: string) {
  const params = new URLSearchParams({ text });
  return `https://wa.me/${encodeURIComponent(phoneE164NoPlus)}?${params.toString()}`;
}

export default function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "Desarrollo Web",
      message: "",
      consent: false,
      website: "",
    },
    mode: "onTouched",
  });

  const template = useMemo(() => {
    return (values: ContactValues) => {
      const lines = [
        "Nueva consulta desde el sitio web:",
        "",
        `Nombre: ${values.name}`,
        `Empresa: ${values.company || "-"}`,
        `Email: ${values.email}`,
        `Telefono: ${values.phone || "-"}`,
        `Servicio: ${values.service}`,
        "",
        "Mensaje:",
        values.message,
      ];
      return lines.join("\n");
    };
  }, []);

  async function onSubmit(values: ContactValues) {
    // Honeypot: likely bot.
    if ((values.website || "").trim().length > 0) {
      form.reset();
      return;
    }

    const toEmail = "informes@tuchambita.com"; // proponer un correo recepcionista
    const subject = `Consulta - ${values.service}`;
    const body = template(values);
    const mailto = buildMailtoHref(toEmail, subject, body);

    const whatsappTo = "51989326647"; // proponer un número corporativo
    const whatsapp = buildWhatsappHref(whatsappTo, `${subject}\n\n${body}`);

    const copyText = `Para: ${toEmail}\nAsunto: ${subject}\n\n${body}`;

    const copy = async () => {
      try {
        await navigator.clipboard.writeText(copyText);
        return true;
      } catch {
        return false;
      }
    };

    // Best-effort: copy first (helps when mailto is not configured).
    const copied = await copy();

    toast({
      title: "Listo",
      description: copied
        ? "Abrimos tu correo para enviar el mensaje. Si no se abre, el texto ya quedo copiado."
        : "Abrimos tu correo para enviar el mensaje. Si no se abre, prueba enviarlo por WhatsApp.",
      action: (
        <ToastAction
          altText="Abrir WhatsApp"
          onClick={() => window.open(whatsapp, "_blank", "noopener,noreferrer")}
        >
          WhatsApp
        </ToastAction>
      ),
    });

    // Trigger mail client. This is a static site, so we use mailto as default transport.
    setTimeout(() => {
      window.location.href = mailto;
    }, 100);

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Sitio web</FormLabel>
              <FormControl>
                <Input autoComplete="off" tabIndex={-1} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa (opcional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nombre de la empresa"
                    autoComplete="organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="tu@email.com"
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono (opcional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+51 989 326 647"
                    type="tel"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Servicio de interes</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consulta</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuentanos que necesitas y te respondemos en 24h."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(v) => field.onChange(Boolean(v))}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal text-muted-foreground">
                    Acepto que me contacten para responder esta consulta.
                  </FormLabel>
                  <FormMessage />
                </div>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Enviar consulta
        </Button>
      </form>
    </Form>
  );
}
