import { Building2, Home, Rocket } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Empresas',
    subtitle: 'Transformación digital corporativa',
    description: 'Automatización de procesos, integración de sistemas y plataformas web empresariales que optimizan operaciones.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
    stats: [
      { value: '60%', label: 'Reducción de tiempo' },
      { value: '45%', label: 'Ahorro en costos' },
    ],
  },
  {
    icon: Home,
    title: 'Hogares Inteligentes',
    subtitle: 'Domótica y energía renovable',
    description: 'Casas conectadas con control total desde tu smartphone, integradas con paneles solares y sistemas eficientes.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80',
    stats: [
      { value: '40%', label: 'Ahorro energético' },
      { value: '100%', label: 'Control remoto' },
    ],
  },
  {
    icon: Rocket,
    title: 'Startups',
    subtitle: 'Lanzamiento digital acelerado',
    description: 'MVPs rápidos, plataformas escalables y tecnología lista para crecer junto con tu emprendimiento.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&q=80',
    stats: [
      { value: '3x', label: 'Más rápido al mercado' },
      { value: '50%', label: 'Menos inversión inicial' },
    ],
  },
];

const UseCases = () => {
  return (
    <section className="vexa-section vexa-gradient-subtle-bg">
      <div className="vexa-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-vexa-green uppercase tracking-wider mb-4 block">
            Casos de Uso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Soluciones para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre cómo nuestras tecnologías transforman diferentes tipos de proyectos.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="vexa-card overflow-hidden p-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl vexa-gradient-bg flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-vexa-blue uppercase tracking-wider">
                  {useCase.subtitle}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {useCase.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold vexa-gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
