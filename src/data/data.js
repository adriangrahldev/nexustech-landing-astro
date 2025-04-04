/**
 * Datos de la empresa ficticia NexusTech Solutions
 * Este archivo contiene toda la información relacionada con la empresa
 */

export const companyData = {
  // Información básica de la empresa
  company: {
    name: "NexusTech Solutions",
    tagline: "Conectando el futuro con innovación tecnológica",
    founded: 2018,
    headquarters: "Madrid, España",
    website: "www.nexustechsolutions.com",
    email: "contacto@nexustechsolutions.com",
    phone: "+34 91 123 4567",
    logo: "/images/nexustech-logo.svg",
  },

  // Misión y valores
  mission: {
    statement: "Transformar la manera en que las empresas interactúan con la tecnología, proporcionando soluciones innovadoras que impulsen el crecimiento y la eficiencia.",
    vision: "Ser líderes globales en soluciones tecnológicas empresariales para 2025.",
    values: [
      {
        title: "Innovación",
        description: "Buscamos constantemente nuevas formas de resolver problemas tecnológicos."
      },
      {
        title: "Excelencia",
        description: "Nos comprometemos a entregar soluciones de la más alta calidad."
      },
      {
        title: "Colaboración",
        description: "Trabajamos en equipo para alcanzar resultados extraordinarios."
      },
      {
        title: "Sostenibilidad",
        description: "Desarrollamos soluciones que respetan el medio ambiente."
      }
    ]
  },

  // Servicios principales
  services: [
    {
      id: 1,
      name: "Inteligencia Artificial",
      description: "Soluciones de IA personalizadas para optimizar procesos empresariales",
      icon: "brain",
      features: [
        "Procesamiento de lenguaje natural",
        "Análisis predictivo",
        "Automatización inteligente",
        "Chatbots avanzados"
      ]
    },
    {
      id: 2,
      name: "Cloud Solutions",
      description: "Infraestructura cloud escalable y segura para tu negocio",
      icon: "cloud",
      features: [
        "Migración a la nube",
        "Arquitectura serverless",
        "Seguridad cloud",
        "Optimización de costes"
      ]
    },
    {
      id: 3,
      name: "Ciberseguridad",
      description: "Protección avanzada contra amenazas digitales",
      icon: "shield",
      features: [
        "Auditorías de seguridad",
        "Protección de datos",
        "Cumplimiento normativo",
        "Formación en seguridad"
      ]
    }
  ],

  // Estadísticas y logros
  stats: [
    {
      value: 500,
      label: "Clientes Satisfechos"
    },
    {
      value: 1200,
      label: "Proyectos Completados"
    },
    {
      value: 150,
      label: "Miembros del Equipo"
    },
    {
      value: 12,
      label: "Países Alcanzados"
    }
  ],

  // Equipo directivo
  leadership: [
    {
      name: "Dra. Ana Martínez",
      position: "CEO y Fundadora",
      bio: "Doctora en Inteligencia Artificial con más de 15 años de experiencia en el sector tecnológico.",
      image: "/images/team/ana-martinez.jpg"
    },
    {
      name: "Carlos Rodríguez",
      position: "CTO",
      bio: "Experto en arquitectura cloud y desarrollo de software con experiencia en empresas Fortune 500.",
      image: "/images/team/carlos-rodriguez.jpg"
    },
    {
      name: "Laura Sánchez",
      position: "Directora de Innovación",
      bio: "Especialista en transformación digital y estrategias de innovación tecnológica.",
      image: "/images/team/laura-sanchez.jpg"
    }
  ],

  // Testimonios de clientes
  testimonials: [
    {
      name: "María González",
      position: "Directora de TI",
      company: "Global Retail Corp",
      content: "NexusTech transformó completamente nuestra infraestructura tecnológica. Su enfoque innovador y atención al detalle son excepcionales.",
      image: "/images/testimonials/maria-gonzalez.jpg"
    },
    {
      name: "Juan Pérez",
      position: "CEO",
      company: "Startup Innovadora",
      content: "La implementación de sus soluciones de IA nos permitió automatizar procesos que antes consumían horas de trabajo manual.",
      image: "/images/testimonials/juan-perez.jpg"
    }
  ],

  // Contacto y ubicación
  contact: {
    address: {
      street: "Calle de la Innovación 123",
      city: "Madrid",
      state: "Madrid",
      zipCode: "28001",
      country: "España"
    },
    socialMedia: {
      linkedin: "https://linkedin.com/company/nexustech",
      twitter: "https://twitter.com/nexustech",
      facebook: "https://facebook.com/nexustech",
      instagram: "https://instagram.com/nexustech"
    }
  }
}; 