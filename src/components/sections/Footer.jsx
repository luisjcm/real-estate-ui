import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig } from '../../data/config'

const socialIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebookF,
}

/**
 * Pie de página con identidad de marca, navegación y enlaces sociales configurados.
 * @returns {JSX.Element}
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#20332b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        
        {/* Contenedor Principal: 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 border-b border-white/15 pb-10 md:grid-cols-4 lg:gap-12">
          
          {/* Columna 1: Marca y Redes (Ocupa 2 columnas en móvil y 2 en desktop) */}
          <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a className="font-serif text-3xl leading-none mb-8" href="#inicio">
              {siteConfig.brand.name}
            </a>

            <ul aria-label="Redes sociales" className="flex items-center justify-center gap-3 md:justify-start">
              {siteConfig.contact.socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <li key={social.name}>
                    <a
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-white hover:text-white"
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Columna 2: Navegación (Ocupa 1 columna) */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Explorar
            </h3>
            <nav aria-label={siteConfig.accessibility.navigationLabel}>
              <ul className="flex flex-col items-start gap-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <a className="text-sm text-white/70 transition-colors hover:text-white" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3: Legal (Ocupa 1 columna) */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {siteConfig.footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-sm text-white/70 transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Fila Inferior: Copyright y Firma */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/55 sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} {siteConfig.brand.name} · {siteConfig.footer.copyrightLabel}
          </p>
          <p className="text-center sm:text-right">
            {siteConfig.footer.developerText}{' '}
            <a
              href={siteConfig.footer.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors hover:underline"
            >
              {siteConfig.footer.developerName}
            </a>
          </p>
        </div>
        
      </div>
    </footer>
  )
}