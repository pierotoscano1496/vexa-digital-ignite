import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SOLUTIONS, getSolutionBySlug } from "@/content/solutions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SolutionPage = () => {
  const { slug } = useParams();
  const solution = useMemo(() => getSolutionBySlug(slug), [slug]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="vexa-container pt-28 pb-24">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Solución no encontrada</h1>
          <p className="text-muted-foreground mb-6">El enlace puede estar incompleto o la solución ya no está disponible.</p>
          <Button asChild>
            <Link to="/">Volver al inicio</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="vexa-container pt-28 pb-24">
        <nav className="text-sm text-muted-foreground mb-5">
          <Link to="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link to="/#soluciones" className="hover:text-foreground transition-colors">
            Soluciones
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{solution.title}</span>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border bg-card p-7 md:p-10 shadow-vexa-md">
          <div className="absolute inset-0 pointer-events-none opacity-70 vexa-gradient-subtle-bg" />
          <div className="relative">
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
                aria-hidden="true"
              >
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{solution.title}</h1>
                <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">{solution.detail.tagline}</p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" asChild>
                    <Link to="/#contacto">Solicitar propuesta</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/#soluciones">Ver otros pilares</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:items-start">
          <section className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Qué logramos</h2>
              <ul className="space-y-2 text-muted-foreground">
                {solution.detail.outcomes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-vexa-blue" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Entregables</h2>
              <ul className="space-y-2 text-muted-foreground">
                {solution.detail.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-vexa-green" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Casos de uso</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {solution.detail.useCases.map((c) => (
                  <div key={c.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Cómo trabajamos</h2>
              <ol className="space-y-3 text-muted-foreground">
                {solution.detail.process.map((p) => (
                  <li key={p.step} className="flex gap-3">
                    <span className="text-xs font-bold text-foreground bg-muted rounded-full px-2 py-1 h-fit">{p.step}</span>
                    <span className="leading-relaxed">{p.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-3">Integraciones típicas</h2>
              <div className="flex flex-wrap gap-2">
                {solution.detail.integrations.map((i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    {i}
                  </span>
                ))}
              </div>

              <Separator className="my-5" />

              <h2 className="text-sm font-semibold text-foreground mb-3">Explora los otros pilares</h2>
              <ul className="space-y-2">
                {SOLUTIONS.filter((s) => s.slug !== solution.slug).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/soluciones/${s.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <div className="vexa-gradient-bg p-6 text-primary-foreground">
                <h2 className="text-lg font-bold">¿Listo para empezar?</h2>
                <p className="text-sm text-primary-foreground/80 mt-2">
                  Cuéntanos tu objetivo y te devolvemos una propuesta clara con próximos pasos.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" asChild>
                    <Link to="/#contacto">Hablar con VEXA</Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-5">Preguntas frecuentes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {solution.detail.faq.map((f) => (
              <div key={f.q} className="rounded-2xl border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{f.q}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionPage;

