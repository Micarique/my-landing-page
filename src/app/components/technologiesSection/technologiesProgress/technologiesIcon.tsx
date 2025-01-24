import Image from 'next/image'
import './technologiesIcon.scss'

interface TechnologiesIconProps {
  src: string
  alt: string
}

export function TechnologiesIcon({ src, alt }: TechnologiesIconProps) {
  return (
    <Image
      className="technologies-icon"
      src={src}
      alt={alt}
      width={38}
      height={38}
      priority
    />
  )
}
