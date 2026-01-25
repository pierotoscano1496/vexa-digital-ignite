import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    soluciones: [
      { label: 'Desarrollo Web', href: '#' },
      { label: 'Domótica Inteligente', href: '#' },
      { label: 'Automatización', href: '#' },
      { label: 'Energía Renovable', href: '#' },
    ],
    empresa: [
      { label: 'Nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Casos de éxito', href: '#' },
      { label: 'Carreras', href: '#' },
    ],
    soporte: [
      { label: 'Centro de ayuda', href: '#' },
      { label: 'Documentación', href: '#' },
      { label: 'Estado del sistema', href: '#' },
      { label: 'Contacto', href: '#contacto' },
    ],
  };

  const social = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="vexa-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 vexa-gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl">
                VEXA<span className="font-normal text-sm text-primary-foreground/60 ml-1">Perú S.A.C</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Innovación digital y tecnológica para empresas peruanas. 
              Transformamos negocios con soluciones inteligentes y sostenibles.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:info@vexaperu.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@vexaperu.com</span>
              </a>
              <a href="tel:+51999888777" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+51 999 888 777</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-3">
              {links.soluciones.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {links.soporte.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} VEXA Perú S.A.C. Todos los derechos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
