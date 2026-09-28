export const siteConfig = {
  brand: {
    name: 'habita.',
    descriptor: 'BIENES RAÍCES',
  },
  regionLabel: 'CDMX / MÉXICO',
  accessibility: {
    navigationLabel: 'Navegación principal',
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
}