import { Clock, Cpu, TrendingUp, Leaf, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Ahorro de tiempo y costos',
    description: 'Reducimos hasta un 40% los costos operativos mediante automatización inteligente y procesos optimizados.',
  },
  {
    icon: Cpu,
    title: 'Tecnología de última generación',
    description: 'Implementamos las herramientas más avanzadas del mercado para garantizar resultados excepcionales.',
  },
  {
    icon: TrendingUp,
    title: 'Soluciones escalables',
    description: 'Nuestras soluciones crecen con tu empresa, adaptándose a tus necesidades en cada etapa.',
  },
  {
    icon: Leaf,
    title: 'Enfoque sostenible',
    description: 'Combinamos innovación con responsabilidad ambiental para un futuro más verde y eficiente.',
  },
];

const WhyVexa = () => {
  return (
    <section id="porque-vexa" className="vexa-section vexa-gradient-subtle-bg">
      <div className="vexa-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="text-sm font-semibold text-vexa-green uppercase tracking-wider mb-4 block">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformamos empresas con{' '}
              <span className="vexa-gradient-text">resultados medibles</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No solo implementamos tecnología, creamos soluciones integrales que 
              generan valor real para tu negocio desde el primer día.
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {['ROI comprobado en cada proyecto', 'Equipo certificado y especializado', 'Soporte técnico continuo', 'Metodología ágil y transparente'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vexa-green flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="vexa-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-vexa-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVexa;
