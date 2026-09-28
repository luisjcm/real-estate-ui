/**
 * Tarjeta minimalista de servicio con un icono inyectado para mantenerla desacoplada.
 * @param {{ title: string, description: string, icon: import('lucide-react').LucideIcon }} props
 * @returns {JSX.Element}
 */
export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <article className="border border-[#20332b]/10 bg-white p-6 sm:p-7">
      <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#e7eee5] text-[#526d50]">
        <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
      </div>
      <h3 className="font-serif text-2xl leading-tight text-[#20332b]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#20332b]/65">{description}</p>
    </article>
  )
}