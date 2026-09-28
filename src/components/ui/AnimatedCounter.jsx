import { useEffect, useRef, useState } from 'react'

const animationDuration = 5000

/**
 * Anima la parte numérica de una métrica al entrar en el viewport y conserva su texto.
 * @param {{ value: string, className?: string }} props
 * @returns {JSX.Element}
 */
export default function AnimatedCounter({ value, className = '' }) {
  const counterRef = useRef(null)
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)
  const [animatedValue, setAnimatedValue] = useState(0)
  const valueParts = String(value).match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/u)

  const prefix = valueParts?.[1] ?? ''
  const numericText = valueParts?.[2] ?? ''
  const suffix = valueParts?.[3] ?? ''
  const hasNumericValue = valueParts !== null
  const targetValue = Number(numericText.replace(',', '.'))
  const decimalPlaces = numericText.split(/[.,]/)[1]?.length ?? 0

  useEffect(() => {
    const element = counterRef.current

    if (!element || !hasNumericValue) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value, hasNumericValue])

  useEffect(() => {
    if (!hasEnteredViewport || !hasNumericValue) return undefined

    let animationFrameId
    let startTime

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / animationDuration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setAnimatedValue(targetValue * easedProgress)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [hasEnteredViewport, targetValue, decimalPlaces, hasNumericValue])

  if (!valueParts) {
    return <span className={className}>{value}</span>
  }

  return (
    <span className={className} ref={counterRef}>
      {prefix}
      {animatedValue.toFixed(decimalPlaces)}
      {suffix}
    </span>
  )
}