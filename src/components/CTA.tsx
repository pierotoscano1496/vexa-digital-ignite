import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CTA = () => {
  return (
    <section id="contacto" className="vexa-section">
      <div className="vexa-container">
        <div className="relative overflow-hidden rounded-3xl vexa-gradient-bg p-8 md:p-14">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-primary-foreground lg:pt-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Lleva tu empresa al siguiente nivel tecnológico
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                Déjanos tus datos y tu consulta. Te respondemos en menos de 24 horas con una propuesta clara.
              </p>
              <div className="text-sm text-primary-foreground/70 space-y-2">
                <p>- Consulta gratuita</p>
                <p>- Sin compromiso</p>
                <p>- Respuesta en 24h</p>
              </div>
            </div>

            <Card className="bg-card/95 backdrop-blur border-white/20 shadow-vexa-xl">
              <CardHeader>
                <CardTitle>Formulario de contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
