import { siteConfig } from '../../data/config'
import Card from '../ui/Card'

/**
 * Sección responsiva que organiza las propiedades destacadas en una cuadrícula.
 * @param {{ properties?: typeof siteConfig.featuredProperties }} props
 * @returns {JSX.Element}
 */
export default function FeaturedProperties({
  properties = siteConfig.featuredProperties,
}) {
  const copy = siteConfig.featuredPropertiesSection

  return (
    <section id="propiedades" className="bg-[#fbfbf8] text-[#20332b]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-9 max-w-2xl sm:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#607a5d] sm:text-sm">
            {copy.eyebrow}
          </p>
          <h2 className="font-sans text-4xl leading-tight sm:text-5xl">
            {copy.title}{' '}
            <span className="font-serif italic text-[#718969]">{copy.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#20332b]/65">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {properties.map((property) => (
            <Card
              key={property.id}
              labels={siteConfig.propertyLabels}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  )
}