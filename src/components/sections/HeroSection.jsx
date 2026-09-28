import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../../data/config'

const actionStyles = {
  primary:
    'bg-[#263f35] text-white hover:bg-[#1b3028] focus-visible:outline-[#263f35]',
  secondary:
    'border border-[#263f35]/25 text-[#263f35] hover:border-[#263f35] focus-visible:outline-[#263f35]',
}

/**
 * Hero principal configurable para presentar la inmobiliaria y destacar una propiedad.
 * @param {{ brand?: { name: string, descriptor: string }, navigation?: Array<{ label: string, href: string }>, content?: typeof siteConfig.hero }} props
 * @returns {JSX.Element}
 */
export default function HeroSection({
  brand = siteConfig.brand,
  navigation = siteConfig.navigation,
  content = siteConfig.hero,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const MobileMenuIcon = isMenuOpen ? X : Menu

  return (
    <section id="inicio" className="bg-[linear-gradient(135deg,#f6f7f2_0%,#eef1e8_58%,#e7eee5_100%)] text-[#20332b]">
      <header className="relative z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 px-5 py-5 sm:px-8 lg:px-12">
        <a className="flex items-center gap-3" href="#inicio" aria-label={brand.name}>
          <span className="font-serif text-3xl leading-none">{brand.name}</span>
          <span className="hidden border-l border-[#20332b]/25 pl-3 text-[10px] font-semibold tracking-[0.16em] sm:block">
            {brand.descriptor}
          </span>
        </a>

        <nav
          aria-label={siteConfig.accessibility.navigationLabel}
          className="hidden items-center gap-8 text-sm md:flex"
        >
          {navigation.map((item) => (
            <a
              className="text-sm text-[#20332b]/75 transition-colors hover:text-[#20332b]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen
              ? siteConfig.accessibility.menuCloseLabel
              : siteConfig.accessibility.menuOpenLabel
          }
          className="flex h-10 w-10 items-center justify-center text-[#20332b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263f35] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <MobileMenuIcon aria-hidden="true" size={22} strokeWidth={1.7} />
        </button>

        <span className="text-xs font-semibold tracking-[0.12em] text-[#607a5d] sm:text-sm">
          {siteConfig.regionLabel}
        </span>

        <nav
          id="mobile-navigation"
          aria-label={siteConfig.accessibility.navigationLabel}
          aria-hidden={!isMenuOpen}
          className={`absolute inset-x-5 top-full z-50 flex flex-col gap-1 bg-[#fbfbf8] p-3 text-sm shadow-[0_16px_32px_rgba(32,51,43,0.12)] ring-1 ring-[#20332b]/10 transition-all duration-300 ease-in-out transform sm:inset-x-8 md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 pointer-events-none opacity-0'}`}
          inert={!isMenuOpen}
        >
          {navigation.map((item) => (
            <a
              className="px-3 py-3 text-[#20332b]/80 transition-colors hover:bg-[#e7eee5] hover:text-[#20332b]"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-7 sm:px-8 md:pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-12">
        <div className="flex flex-col items-start">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#607a5d] sm:text-sm">
            <span className="h-px w-8 bg-[#a27650]" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="max-w-2xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
            {content.headline}{' '}
            <span className="font-serif italic text-[#718969]">{content.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#20332b]/70 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {content.actions.map((action) => (
              <a
                className={`inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${actionStyles[action.variant]}`}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>

          <dl className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-[#20332b]/15 pt-5 sm:mt-16 sm:gap-6">
            {content.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xl font-semibold sm:text-2xl">{metric.value}</dt>
                <dd className="mt-1 max-w-28 text-xs leading-5 text-[#20332b]/60 sm:text-sm">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative isolate min-h-80 overflow-hidden sm:min-h-[26rem] lg:min-h-[38rem]">
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={content.image.src}
            alt={content.image.alt}
          />
          <div className="absolute left-4 top-4 bg-[#f6f7f2] px-4 py-3 sm:left-6 sm:top-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#607a5d]">
              {content.image.label}
            </p>
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-[#20332b]/90 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-7">
            <div>
              <p className="font-serif text-2xl sm:text-3xl">{content.image.location}</p>
              <p className="mt-1 text-sm text-white/70">{content.image.detail}</p>
            </div>
            <p className="text-sm font-semibold sm:text-base">{content.image.price}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}