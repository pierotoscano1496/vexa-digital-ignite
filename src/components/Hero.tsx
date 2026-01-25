import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--vexa-gradient-hero)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-vexa-blue/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-vexa-green/10 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="vexa-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-vexa-blue" />
            <span className="text-sm font-medium text-muted-foreground">
              Transformación digital para Perú
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
            Innovamos tu empresa con{' '}
            <span className="vexa-gradient-text">tecnología inteligente</span>
            {' '}y sostenible
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up-delay-2 font-light">
            Digitaliza. Automatiza. Optimiza.
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
            Soluciones tecnológicas de última generación para empresas peruanas 
            que buscan liderar el futuro digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl">
              Solicitar asesoría
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver soluciones
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up-delay-3">
            {[
              { value: '50+', label: 'Proyectos completados' },
              { value: '98%', label: 'Clientes satisfechos' },
              { value: '40%', label: 'Ahorro promedio' },
              { value: '24/7', label: 'Soporte continuo' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold vexa-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
