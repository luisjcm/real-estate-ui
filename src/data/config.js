export const siteConfig = {
  brand: {
    name: 'habita.',
    descriptor: 'BIENES RAÍCES',
  },
  regionLabel: 'CDMX / MÉXICO',
  accessibility: {
    navigationLabel: 'Navegación principal',
    menuOpenLabel: 'Abrir menú de navegación',
    menuCloseLabel: 'Cerrar menú de navegación',
  },
  navigation: [
    { label: 'Propiedades', href: '#propiedades' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Inmobiliaria boutique · Ciudad de México',
    headline: 'El espacio correcto',
    headlineAccent: 'cambia todo.',
    description:
      'Te acompañamos a encontrar una propiedad que encaje con tu forma de vivir, tus planes y lo que viene después.',
    actions: [
      { label: 'Explorar propiedades', href: '#propiedades', variant: 'primary' },
      {
        label: 'Agenda una asesoría',
        href: 'mailto:hola@habita.mx',
        variant: 'secondary',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Sala luminosa de una casa contemporánea con vistas al jardín',
      label: 'Selección de la semana',
      location: 'Casa Olivo · San Ángel',
      detail: 'Residencia · 4 recámaras',
      price: '$12,850,000 MXN',
    },
    metrics: [
      { value: '240+', label: 'propiedades seleccionadas' },
      { value: '12 años', label: 'en el mercado local' },
      { value: '96%', label: 'de clientes por recomendación' },
    ],
  },
  featuredPropertiesSection: {
    eyebrow: 'Espacios seleccionados',
    title: 'Propiedades con',
    titleAccent: 'algo especial.',
    description:
      'Una selección cuidada de hogares con carácter, en ubicaciones que hacen más fácil imaginar tu próxima etapa.',
  },
  propertyLabels: {
    bedrooms: 'Recámaras',
    bathrooms: 'Baños',
    area: 'm²',
  },
  featuredProperties: [
    {
      id: 'casa-olivo-san-angel',
      title: 'Casa Olivo',
      location: 'San Ángel, Ciudad de México',
      price: '$12,850,000 MXN',
      bedrooms: 4,
      bathrooms: 3,
      area: 286,
      imageUrl:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Casa contemporánea con sala abierta hacia el jardín',
    },
    {
      id: 'departamento-luz-condesa',
      title: 'Departamento Luz',
      location: 'Condesa, Ciudad de México',
      price: '$8,490,000 MXN',
      bedrooms: 3,
      bathrooms: 2,
      area: 174,
      imageUrl:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Departamento amplio con sala de diseño contemporáneo',
    },
    {
      id: 'casa-patio-coyoacan',
      title: 'Casa Patio',
      location: 'Del Carmen, Coyoacán',
      price: '$10,200,000 MXN',
      bedrooms: 3,
      bathrooms: 3,
      area: 241,
      imageUrl:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Residencia con patio ajardinado y ventanales amplios',
    },
  ],
  servicesSection: {
    eyebrow: 'Acompañamiento integral',
    title: 'Nuestros',
    titleAccent: 'Servicios',
    description:
      'Te damos claridad y respaldo en cada etapa, desde la primera valoración hasta la firma final.',
  },
  services: [
    {
      id: 'asesoria-legal',
      title: 'Asesoría legal',
      description:
        'Revisamos documentos, contratos y antecedentes para que tomes decisiones con tranquilidad.',
      icon: 'Scale',
    },
    {
      id: 'valuacion-inmobiliaria',
      title: 'Valuación inmobiliaria',
      description:
        'Estimamos el valor de mercado de tu propiedad con criterios claros y conocimiento local.',
      icon: 'BadgeDollarSign',
    },
    {
      id: 'gestion-de-creditos',
      title: 'Gestión de créditos',
      description:
        'Comparamos alternativas de financiamiento y te acompañamos durante el trámite.',
      icon: 'Landmark',
    },
    {
      id: 'asesoria-de-compra',
      title: 'Asesoría de compra',
      description:
        'Definimos tus prioridades y negociamos contigo para encontrar el hogar adecuado.',
      icon: 'Handshake',
    },
  ],
  contact: {
    email: 'hola@habita.mx',
    phone: '+52 55 5555 0101',
    phoneHref: '+525555550101',
    address: 'Av. de la Paz 123, San Ángel, Ciudad de México, CDMX',
    socialLinks: [
      { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
      { name: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
    ],
  },
  contactSection: {
    eyebrow: 'Estamos para ayudarte',
    title: 'Hablemos de',
    titleAccent: 'tu próximo espacio.',
    description:
      'Cuéntanos qué estás buscando. Nuestro equipo te responderá para encontrar juntos el mejor camino.',
    form: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿Qué propiedad o servicio tienes en mente?',
      submitLabel: 'Enviar mensaje',
    },
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados.',
    developerText: 'Desarrollado por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com',
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '#privacidad' },
      { label: 'Términos y Condiciones', href: '#terminos' },
      { label: 'Política de Cookies', href: '#cookies' },
    ],
  },
}