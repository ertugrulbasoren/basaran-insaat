import Image from 'next/image'

export default function Icon() {
  return (
    <Image
      src="/images/logo.jpg"
      alt="Başaran İnşaat & Emlak"
      width={32}
      height={32}
      priority
    />
  )
}
