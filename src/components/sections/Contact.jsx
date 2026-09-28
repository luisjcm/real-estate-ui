import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '../../data/config'
import Button from '../ui/Button'

/**
 * Sección de contacto con datos de la inmobiliaria y formulario de envío por correo.
 * @returns {JSX.Element}
 */
export default function Contact() {
  const { contact, contactSection } = siteConfig
  const form = contactSection.form

  return (
    <section id="contacto" className="bg-[#fbfbf8] text-[#20332b]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#607a5d] sm:text-sm">
            {contactSection.eyebrow}
          </p>
          <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">
            {contactSection.title}{' '}
            <span className="font-serif italic text-[#718969]">
              {contactSection.titleAccent}
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#20332b]/65">
            {contactSection.description}
          </p>

          <address className="mt-10 space-y-6 not-italic">
            <a className="flex items-start gap-4 text-sm leading-6 hover:text-[#607a5d]" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" className="mt-0.5 shrink-0 text-[#718969]" size={19} strokeWidth={1.7} />
              {contact.email}
            </a>
            <a className="flex items-start gap-4 text-sm leading-6 hover:text-[#607a5d]" href={`tel:${contact.phoneHref}`}>
              <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#718969]" size={19} strokeWidth={1.7} />
              {contact.phone}
            </a>
            <p className="flex items-start gap-4 text-sm leading-6 text-[#20332b]/75">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#718969]" size={19} strokeWidth={1.7} />
              {contact.address}
            </p>
          </address>
        </div>

        <form
          action={`mailto:${contact.email}`}
          className="space-y-6"
          encType="text/plain"
          method="post"
        >
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="contact-name">
              {form.nameLabel}
            </label>
            <input
              autoComplete="name"
              className="min-h-12 w-full border border-[#20332b]/15 bg-white px-4 text-base outline-none transition-colors placeholder:text-[#20332b]/35 focus:border-[#718969] focus:ring-1 focus:ring-[#718969]"
              id="contact-name"
              name="Nombre"
              placeholder={form.namePlaceholder}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="contact-email">
              {form.emailLabel}
            </label>
            <input
              autoComplete="email"
              className="min-h-12 w-full border border-[#20332b]/15 bg-white px-4 text-base outline-none transition-colors placeholder:text-[#20332b]/35 focus:border-[#718969] focus:ring-1 focus:ring-[#718969]"
              id="contact-email"
              name="Correo electrónico"
              placeholder={form.emailPlaceholder}
              required
              type="email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="contact-message">
              {form.messageLabel}
            </label>
            <textarea
              className="min-h-36 w-full resize-y border border-[#20332b]/15 bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[#20332b]/35 focus:border-[#718969] focus:ring-1 focus:ring-[#718969]"
              id="contact-message"
              name="Mensaje"
              placeholder={form.messagePlaceholder}
              required
              rows="5"
            />
          </div>

          <Button className="w-full sm:w-auto" icon={Send} type="submit">
            {form.submitLabel}
          </Button>
        </form>
      </div>
    </section>
  )
}