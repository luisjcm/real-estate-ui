const variants = {
  primary:
    'bg-[#263f35] text-white hover:bg-[#1b3028] focus-visible:outline-[#263f35]',
  light:
    'bg-[#d5dfcf] text-[#20332b] hover:bg-white focus-visible:outline-white',
}

/**
 * Botón reutilizable con variantes visuales e icono opcional.
 * @param {{ children: import('react').ReactNode, type?: 'button' | 'submit' | 'reset', variant?: 'primary' | 'light', icon?: import('lucide-react').LucideIcon, className?: string }} props
 * @returns {JSX.Element}
 */
export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  icon: Icon,
  className = '',
}) {
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      type={type}
    >
      <span>{children}</span>
      {Icon && <Icon aria-hidden="true" size={17} strokeWidth={1.8} />}
    </button>
  )
}