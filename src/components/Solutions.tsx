import { Globe, Zap, Bot, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'Desarrollo Web Inteligente',
    description: 'Creamos páginas web modernas, plataformas digitales y aplicaciones que impulsan tu presencia online con tecnología de vanguardia.',
    features: ['Diseño responsivo', 'SEO optimizado', 'Alta velocidad', 'Escalabilidad'],
    gradient: 'from-vexa-blue to-vexa-blue-light',
  },
  {
    icon: Zap,
    title: 'Domótica + Energía Renovable',
    description: 'Transformamos hogares y empresas en espacios inteligentes integrados con sistemas de energía renovable para máxima eficiencia.',
    features: ['Control remoto total', 'Ahorro energético', 'Paneles solares', 'Monitoreo 24/7'],
    gradient: 'from-vexa-green to-vexa-green-light',
  },
  {
    icon: Bot,
    title: 'Automatización de Procesos',
    description: 'Optimizamos tus operaciones empresariales con soluciones de automatización que reducen costos y aumentan la productividad.',
    features: ['RPA empresarial', 'Integración de sistemas', 'Workflows inteligentes', 'Analytics'],
    gradient: 'from-vexa-blue to-vexa-green',
  },
];

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
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="vexa-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 group-hover:text-vexa-blue transition-colors">
                {solution.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
