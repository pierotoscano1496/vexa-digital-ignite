import type { LucideIcon } from "lucide-react";
import { Bot, Globe, Zap } from "lucide-react";

export type SolutionFaq = {
  q: string;
  a: string;
};

export type SolutionUseCase = {
  title: string;
  description: string;
};

export type SolutionProcessStep = {
  step: string;
  description: string;
};

export type SolutionPillar = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  detail: {
    tagline: string;
    outcomes: string[];
    deliverables: string[];
    useCases: SolutionUseCase[];
    process: SolutionProcessStep[];
    integrations: string[];
    faq: SolutionFaq[];
  };
};

export const SOLUTIONS: SolutionPillar[] = [
  {
    slug: "desarrollo-web-inteligente",
    icon: Globe,
    title: "Desarrollo Web Inteligente",
    description:
      "Creamos páginas web modernas, plataformas digitales y aplicaciones que impulsan tu presencia online con tecnología de vanguardia.",
    features: ["Diseño responsivo", "SEO optimizado", "Alta velocidad", "Escalabilidad"],
    gradient: "from-vexa-blue to-vexa-blue-light",
    detail: {
      tagline: "De landing a plataforma: performance, SEO y contenido listo para crecer.",
      outcomes: [
        "Mejor conversión con contenido y estructura pensados para el usuario.",
        "Carga rápida y base técnica sólida (Core Web Vitals y buenas prácticas).",
        "Medición clara (eventos, embudos y objetivos) para tomar decisiones.",
        "Arquitectura preparada para iterar: nuevas secciones, campañas y productos.",
      ],
      deliverables: [
        "Diseño UI (componentes + estados) y experiencia mobile-first.",
        "Sitio o app con secciones administrables (si aplica) y analítica configurada.",
        "SEO on-page: estructura, metas, schema básico, sitemap/robots (según alcance).",
        "Optimización de performance, accesibilidad y QA multi-dispositivo.",
      ],
      useCases: [
        {
          title: "Web corporativa con foco comercial",
          description: "Estructura por servicios, prueba social, casos de éxito y CTAs medibles.",
        },
        {
          title: "Landing para campañas",
          description: "Velocidad y mensaje directo: formularios, tracking y A/B (si se requiere).",
        },
        {
          title: "Plataforma o portal",
          description: "Autenticación, roles, paneles y flujos; integraciones con sistemas existentes.",
        },
      ],
      process: [
        { step: "Diagnóstico", description: "Objetivos, audiencia, competencia y mapa de contenido." },
        { step: "Arquitectura + UX", description: "Estructura, navegación, wireframes y flujos." },
        { step: "UI + Desarrollo", description: "Componentes, implementación, integraciones y QA." },
        { step: "Lanzamiento", description: "SEO técnico, analítica, performance y checklist final." },
      ],
      integrations: [
        "Analytics (GA4/Tag Manager)",
        "CRM (HubSpot, Zoho o similar)",
        "WhatsApp / Formularios",
        "CMS (si aplica) y automatizaciones básicas",
      ],
      faq: [
        {
          q: "¿Necesito un dominio y hosting?",
          a: "Si ya los tienes, los integramos. Si no, te asesoramos para elegir una opción segura y escalable según tu tráfico y necesidades.",
        },
        {
          q: "¿Puedo editar el contenido sin depender de ustedes?",
          a: "Sí. Podemos dejar secciones administrables y una guía corta para que tu equipo edite textos, imágenes y publicaciones.",
        },
        {
          q: "¿Incluye SEO?",
          a: "Incluimos SEO on-page y base técnica. Para SEO continuo (contenido, enlaces, estrategia) se plantea como servicio mensual.",
        },
      ],
    },
  },
  {
    slug: "domotica-energia-renovable",
    icon: Zap,
    title: "Domótica + Energía Renovable",
    description:
      "Transformamos hogares y empresas en espacios inteligentes integrados con sistemas de energía renovable para máxima eficiencia.",
    features: ["Control remoto total", "Ahorro energético", "Paneles solares", "Monitoreo 24/7"],
    gradient: "from-vexa-green to-vexa-green-light",
    detail: {
      tagline: "Automatiza, mide y optimiza: confort, seguridad y consumo bajo control.",
      outcomes: [
        "Reducción de consumo con automatizaciones y medición por zonas/equipos.",
        "Mayor confort: escenas, horarios y control desde app.",
        "Seguridad operativa con monitoreo y alertas.",
        "Escalabilidad: empiezas por un área y creces por módulos.",
      ],
      deliverables: [
        "Levantamiento y diseño de solución (domótica + energía, según el caso).",
        "Arquitectura de dispositivos, red y control (app/panel/escenas).",
        "Instalación, configuración, pruebas y capacitación básica.",
        "Documentación: diagrama, inventario y recomendaciones de mantenimiento.",
      ],
      useCases: [
        {
          title: "Hogar inteligente",
          description: "Iluminación, climatización, persianas, seguridad y escenas (modo noche, salida, etc.).",
        },
        {
          title: "Oficinas y locales",
          description: "Control por horarios, medición de consumo, alertas y automatización de equipos críticos.",
        },
        {
          title: "Energía solar + monitoreo",
          description: "Paneles solares con monitoreo, reportes y optimización del consumo en horas pico.",
        },
      ],
      process: [
        { step: "Evaluación", description: "Objetivos, planos, consumo y condiciones técnicas del sitio." },
        { step: "Diseño", description: "Selección de equipos, seguridad eléctrica, red y control." },
        { step: "Implementación", description: "Instalación, configuración, escenas y pruebas de estabilidad." },
        { step: "Optimización", description: "Ajuste fino, reportes y recomendaciones de ahorro." },
      ],
      integrations: [
        "Sensores (presencia, apertura, temperatura, consumo)",
        "Cámaras y alarmas (según compatibilidad)",
        "Control por app y automatizaciones",
        "Monitoreo de energía y reportes",
      ],
      faq: [
        {
          q: "¿Se puede implementar por etapas?",
          a: "Sí. Recomendamos empezar por un área de alto impacto (iluminación/seguridad/energía) y luego ampliar sin rehacer lo anterior.",
        },
        {
          q: "¿Qué pasa si se va el internet?",
          a: "Diseñamos con control local cuando es posible y definimos qué funciones dependen de la nube. La idea es mantener lo crítico operativo.",
        },
        {
          q: "¿Cuánto ahorro puedo esperar?",
          a: "Depende de hábitos, equipos y consumo base. Lo importante es medir, automatizar y optimizar; te mostramos indicadores desde el arranque.",
        },
      ],
    },
  },
  {
    slug: "automatizacion-de-procesos",
    icon: Bot,
    title: "Automatización de Procesos",
    description:
      "Optimizamos tus operaciones empresariales con soluciones de automatización que reducen costos y aumentan la productividad.",
    features: ["RPA empresarial", "Integración de sistemas", "Workflows inteligentes", "Analytics"],
    gradient: "from-vexa-blue to-vexa-green",
    detail: {
      tagline: "Menos tareas manuales, más control: flujos trazables y medibles.",
      outcomes: [
        "Reducción de tiempos operativos y errores humanos.",
        "Visibilidad: trazabilidad, reportes y alertas en puntos críticos.",
        "Integración entre herramientas: menos doble digitación.",
        "Cumplimiento: reglas claras, auditoría y permisos.",
      ],
      deliverables: [
        "Mapeo de procesos (AS-IS / TO-BE) y priorización por impacto.",
        "Automatizaciones: formularios, aprobaciones, RPA, integraciones y notificaciones.",
        "Tablero de métricas (SLA, tiempos, embudos, incidencias) según el flujo.",
        "Documentación, capacitación y handover para operación.",
      ],
      useCases: [
        {
          title: "Ventas y atención",
          description: "Captura de leads, asignación, seguimiento, recordatorios y respuesta inicial automatizada.",
        },
        {
          title: "Finanzas y backoffice",
          description: "Conciliaciones, carga de facturas, validaciones, aprobaciones y reportes.",
        },
        {
          title: "Operaciones",
          description: "Tickets internos, checklists, órdenes de trabajo y alertas por excepciones.",
        },
      ],
      process: [
        { step: "Descubrimiento", description: "Proceso, dolor, métricas actuales y restricciones." },
        { step: "Diseño de flujo", description: "Reglas, excepciones, responsables y puntos de control." },
        { step: "Implementación", description: "Integraciones, automatización, pruebas y monitoreo." },
        { step: "Mejora continua", description: "Iteraciones cortas basadas en datos y feedback." },
      ],
      integrations: ["ERP/CRM", "Google Workspace / Microsoft 365", "WhatsApp/Email", "APIs y Webhooks"],
      faq: [
        {
          q: "¿Automatización es lo mismo que RPA?",
          a: "RPA es una técnica (bots que operan interfaces). También automatizamos vía integraciones, APIs y workflows; elegimos lo más estable para tu caso.",
        },
        {
          q: "¿Se pueden automatizar procesos con varias herramientas?",
          a: "Sí. Justamente ahí está el valor: conectamos sistemas y dejamos trazabilidad de cada paso con responsables y métricas.",
        },
        {
          q: "¿Qué necesito para empezar?",
          a: "Un proceso candidato, acceso a las herramientas involucradas y un responsable interno para validar reglas y excepciones.",
        },
      ],
    },
  },
];

export function getSolutionBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return SOLUTIONS.find((s) => s.slug === slug);
}

