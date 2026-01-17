import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-dark-500">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-9xl font-bold text-primary-500/20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-light-50">
            Sayfa Bulunamadı
          </h1>
          <p className="text-light-400 text-lg mb-8 max-w-xl mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönerek
            devam edin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary inline-flex items-center group">
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ana Sayfaya Dön
            </Link>
            <Link href="/projeler" className="btn-outline inline-flex items-center group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Projelerimizi İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
