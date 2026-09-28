import { BadgeDollarSign, Handshake, Landmark, Scale } from 'lucide-react'
import { siteConfig } from '../../data/config'
import ServiceCard from '../ui/ServiceCard'

const serviceIcons = {
  Scale,
  BadgeDollarSign,
  Landmark,
  Handshake,
}

/**
 * Sección de servicios inmobiliarios alimentada por la configuración del sitio.
 * @param {{ services?: typeof siteConfig.services }} props
 * @returns {JSX.Element}
 */
export default function Services({ services = siteConfig.services }) {
  const copy = siteConfig.servicesSection

  return (
    <section id="servicios" className="bg-[#f3f5f1] text-[#20332b]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#607a5d] sm:text-sm">
            {copy.eyebrow}
          </p>
          <h2 className="font-sans text-4xl leading-tight sm:text-5xl">
            {copy.title}{' '}
            <span className="font-serif italic text-[#718969]">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#20332b]/65">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              description={service.description}
              icon={serviceIcons[service.icon]}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}