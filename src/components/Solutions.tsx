import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { SOLUTIONS } from "@/content/solutions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Solutions = () => {
  return (
    <section id="soluciones" className="vexa-section">
      <div className="vexa-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-vexa-blue uppercase tracking-wider mb-4 block">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tecnología que transforma tu negocio
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres pilares de innovación diseñados para llevar tu empresa al siguiente nivel tecnológico.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((solution, index) => (
            <Dialog key={solution.slug}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="vexa-card group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <solution.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 group-hover:text-vexa-blue transition-colors">
                    {solution.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-sm font-semibold text-vexa-blue">Ver detalle</span>
                    <span className="text-xs text-muted-foreground">Modal informativo</span>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[85vh]">
                <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <solution.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <DialogTitle className="text-2xl">{solution.title}</DialogTitle>
                        <p className="text-sm text-muted-foreground mt-1">{solution.detail.tagline}</p>
                      </div>
                    </div>
                  </DialogHeader>

                  <Separator className="my-5" />

                  <Tabs defaultValue="resumen">
                    <TabsList className="w-full grid grid-cols-4">
                      <TabsTrigger value="resumen">Resumen</TabsTrigger>
                      <TabsTrigger value="incluye">Qué incluye</TabsTrigger>
                      <TabsTrigger value="casos">Casos</TabsTrigger>
                      <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>

                    <TabsContent value="resumen" className="mt-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Resultado</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {solution.detail.outcomes.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vexa-blue" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Integraciones típicas</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.detail.integrations.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="incluye" className="mt-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Entregables</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {solution.detail.deliverables.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vexa-green" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Cómo trabajamos</h4>
                          <ol className="space-y-3 text-sm text-muted-foreground">
                            {solution.detail.process.map((p) => (
                              <li key={p.step} className="flex gap-3">
                                <span className="text-xs font-bold text-foreground bg-muted rounded-full px-2 py-1 h-fit">
                                  {p.step}
                                </span>
                                <span className="leading-relaxed">{p.description}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="casos" className="mt-5">
                      <div className="grid gap-4 md:grid-cols-3">
                        {solution.detail.useCases.map((c) => (
                          <div key={c.title} className="rounded-2xl border bg-card p-4 shadow-sm">
                            <h4 className="text-sm font-semibold text-foreground mb-2">{c.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="faq" className="mt-5">
                      <div className="space-y-4">
                        {solution.detail.faq.map((f) => (
                          <div key={f.q} className="rounded-2xl border bg-card p-4">
                            <h4 className="text-sm font-semibold text-foreground">{f.q}</h4>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Separator className="my-6" />

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <div className="flex gap-2">
                      <DialogClose asChild>
                        <Button variant="hero" asChild>
                          <a href="#contacto">Pedir diagnóstico</a>
                        </Button>
                      </DialogClose>
                      <Button variant="outline" asChild>
                        <Link to={`/soluciones/${solution.slug}`}>Ver página</Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tip: también puedes compartir el enlace "Ver página" con tu equipo.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
