/**
 * Tarjeta presentacional reutilizable para mostrar una propiedad y sus características.
 * @param {{ property: { title: string, location: string, price: string, bedrooms: number, bathrooms: number, area: number, imageUrl: string, imageAlt: string }, labels: { bedrooms: string, bathrooms: string, area: string } }} props
 * @returns {JSX.Element}
 */
export default function Card({ property, labels }) {
  return (
    <article className="overflow-hidden border border-[#20332b]/10 bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-[#e7eee5]">
        <img
          alt={property.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          height="750"
          loading="lazy"
          src={property.imageUrl}
          width="1000"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 className="font-serif text-2xl leading-tight text-[#20332b]">
              {property.title}
            </h3>
            <p className="mt-2 text-sm text-[#20332b]/60">{property.location}</p>
          </div>
          <p className="text-sm font-semibold text-[#263f35] sm:text-base">{property.price}</p>
        </div>

        <dl className="mt-5 grid grid-cols-3 border-t border-[#20332b]/10 pt-4">
          <div>
            <dt className="text-xs text-[#20332b]/55">{labels.bedrooms}</dt>
            <dd className="mt-1 text-sm font-semibold text-[#20332b]">{property.bedrooms}</dd>
          </div>
          <div>
            <dt className="text-xs text-[#20332b]/55">{labels.bathrooms}</dt>
            <dd className="mt-1 text-sm font-semibold text-[#20332b]">{property.bathrooms}</dd>
          </div>
          <div>
            <dt className="text-xs text-[#20332b]/55">{labels.area}</dt>
            <dd className="mt-1 text-sm font-semibold text-[#20332b]">{property.area}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}