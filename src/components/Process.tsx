import { Search, Lightbulb, Wrench, BarChart3 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Diagnóstico digital',
    description: 'Analizamos tu situación actual, identificamos oportunidades y definimos objetivos claros para tu transformación.',
  },
  {
    step: '02',
    icon: Lightbulb,
    title: 'Diseño de solución',
    description: 'Creamos una estrategia personalizada con las tecnologías más adecuadas para alcanzar tus metas.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Implementación',
    description: 'Ejecutamos el proyecto con metodología ágil, manteniendo comunicación constante y entregas incrementales.',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Optimización continua',
    description: 'Monitoreamos resultados, ajustamos procesos y evolucionamos tu solución para maximizar el impacto.',
  },
];

const Process = () => {
  return (
    <section id="proceso" className="vexa-section">
      <div className="vexa-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-vexa-blue uppercase tracking-wider mb-4 block">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo trabajamos contigo
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-vexa-blue via-vexa-green to-vexa-blue opacity-20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative text-center lg:text-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl vexa-gradient-bg mb-6 mx-auto lg:mx-0 shadow-vexa-lg">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-vexa-blue flex items-center justify-center text-sm font-bold text-vexa-blue">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
