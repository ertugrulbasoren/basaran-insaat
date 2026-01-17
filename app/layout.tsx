import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import StructuredData from '@/components/seo/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-subheading',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Başaran İnşaat & Emlak | İstanbul\'un Güvenilir İnşaat Ortağı',
    template: '%s | Başaran İnşaat & Emlak'
  },
  description: 'Başaran İnşaat & Emlak - Kentsel dönüşüm, konut projeleri ve müteahhitlik hizmetleri. İstanbul\'da güvenilir ve kaliteli inşaat çözümleri.',
  keywords: ['inşaat firması', 'müteahhit', 'kentsel dönüşüm', 'konut projeleri', 'İstanbul', 'güvenilir inşaat', 'Başaran İnşaat'],
  authors: [{ name: 'Başaran İnşaat & Emlak' }],
  creator: 'Başaran İnşaat & Emlak',
  publisher: 'Başaran İnşaat & Emlak',
  metadataBase: new URL('https://basaraninsaat.net.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://basaraninsaat.net.tr',
    siteName: 'Başaran İnşaat & Emlak',
    title: 'Başaran İnşaat & Emlak | İstanbul\'un Güvenilir İnşaat Ortağı',
    description: 'Kentsel dönüşüm, konut projeleri ve müteahhitlik hizmetleri. İstanbul\'da güvenilir ve kaliteli inşaat çözümleri.',
    images: [
      {
        url: 'https://basaraninsaat.net.tr/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Başaran İnşaat & Emlak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Başaran İnşaat & Emlak',
    description: 'İstanbul\'un güvenilir inşaat ortağı',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-body antialiased bg-dark-500 text-light-200`}>
        <StructuredData />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
