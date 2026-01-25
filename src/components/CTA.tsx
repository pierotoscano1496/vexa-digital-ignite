import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="vexa-section">
      <div className="vexa-container">
        <div className="relative overflow-hidden rounded-3xl vexa-gradient-bg p-10 md:p-16 text-center">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Lleva tu empresa al siguiente nivel tecnológico
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
              Agenda una consulta gratuita con nuestros expertos y descubre cómo 
              podemos transformar tu negocio con tecnología inteligente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-card text-foreground hover:bg-card/90 rounded-full font-semibold shadow-vexa-xl hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Agenda una demo
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust badge */}
            <p className="mt-8 text-sm text-primary-foreground/60">
              ✓ Consulta gratuita &nbsp; ✓ Sin compromiso &nbsp; ✓ Respuesta en 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
