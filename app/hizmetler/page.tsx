import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Başaran İnşaat & Emlak olarak kentsel dönüşüm, inşaat ve müteahhitlik, emlak danışmanlığı hizmetleri sunuyoruz.',
  openGraph: {
    title: 'Hizmetlerimiz | Başaran İnşaat & Emlak',
    description: 'Kentsel dönüşüm, inşaat ve müteahhitlik, emlak danışmanlığı hizmetleri.',
  },
}

const serviceDetails = {
  'kentsel-donusum': {
    title: 'Kentsel Dönüşüm',
    description: 'Güvenilir ve hızlı kentsel dönüşüm projeleri ile hayalinizdeki konuta kavuşun.',
    icon: 'Building',
    features: [
      'Risk tespiti ve değerlendirme',
      'Proje yönetimi ve planlama',
      'Yasal süreç takibi',
      'Finansman danışmanlığı',
      'Tasarım ve mimari hizmetler',
      'İnşaat ve teslimat süreçleri',
    ],
    process: [
      {
        step: 1,
        title: 'Risk Tespiti',
        description: 'Mevcut yapının risk analizi yapılır ve dönüşüm gerekliliği belirlenir.',
      },
      {
        step: 2,
        title: 'Proje Planlama',
        description: 'Mimari tasarım, mühendislik çalışmaları ve yasal süreçler planlanır.',
      },
      {
        step: 3,
        title: 'İnşaat Süreci',
        description: 'Kaliteli malzeme ve uzman ekip ile inşaat süreci yönetilir.',
      },
      {
        step: 4,
        title: 'Teslimat',
        description: 'Zamanında ve sorunsuz teslimat ile yeni konutunuzun anahtarları teslim edilir.',
      },
    ],
  },
  'insaat-muteahhitlik': {
    title: 'İnşaat & Müteahhitlik',
    description: 'Kaliteli malzeme ve uzman ekip ile modern konut projeleri inşa ediyoruz.',
    icon: 'Hammer',
    features: [
      'Konut projeleri',
      'Ticari yapılar',
      'Endüstriyel tesisler',
      'Restorasyon projeleri',
      'Proje yönetimi',
      'Kalite kontrol ve güvence',
    ],
    process: [
      {
        step: 1,
        title: 'Proje Analizi',
        description: 'İnşaat projesinin teknik ve mali analizi yapılır.',
      },
      {
        step: 2,
        title: 'Planlama',
        description: 'Detaylı proje planlaması ve zaman çizelgesi oluşturulur.',
      },
      {
        step: 3,
        title: 'İnşaat Yönetimi',
        description: 'Profesyonel ekip ve kaliteli malzemeler ile inşaat süreci yönetilir.',
      },
      {
        step: 4,
        title: 'Kalite Kontrol',
        description: 'Tüm aşamalarda kalite kontrol yapılarak teslimat gerçekleştirilir.',
      },
    ],
  },
  'emlak-danismanligi': {
    title: 'Emlak Danışmanlığı',
    description: 'Profesyonel emlak danışmanlığı hizmeti ile doğru yatırım kararları alın.',
    icon: 'Home',
    features: [
      'Gayrimenkul danışmanlığı',
      'Yatırım analizi',
      'Değer tespiti',
      'Pazarlama ve satış',
      'Kira yönetimi',
      'Hukuki danışmanlık',
    ],
    process: [
      {
        step: 1,
        title: 'İhtiyaç Analizi',
        description: 'Müşterinin ihtiyaçları ve beklentileri belirlenir.',
      },
      {
        step: 2,
        title: 'Araştırma',
        description: 'Piyasa araştırması ve uygun seçenekler belirlenir.',
      },
      {
        step: 3,
        title: 'Değerlendirme',
        description: 'Seçenekler değerlendirilir ve en uygun çözüm önerilir.',
      },
      {
        step: 4,
        title: 'Sonuçlandırma',
        description: 'Süreç tamamlanır ve müşteri memnuniyeti sağlanır.',
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-500 via-dark-100 to-dark-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-light-400 text-lg md:text-xl max-w-3xl mx-auto">
            İnşaat sektöründe sunduğumuz kapsamlı hizmetler ile ihtiyaçlarınıza çözüm üretiyoruz.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-dark-500">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {services.map((service) => {
              const detail = serviceDetails[service.href.replace('/hizmetler/', '') as keyof typeof serviceDetails]
              return (
                <div
                  key={service.id}
                  className="card p-8 bg-dark-100/50 backdrop-blur-sm border border-dark-200 hover:border-primary-500/50 transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mb-6">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h2 className="text-2xl font-subheading font-semibold text-light-50 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-light-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {detail && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-light-300 mb-3">Hizmetlerimiz:</h3>
                        <ul className="space-y-2">
                          {detail.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-light-400">
                              <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Projeleriniz İçin Hemen İletişime Geçin
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto mb-8">
            Hizmetlerimiz hakkında detaylı bilgi almak veya projeleriniz için teklif almak için bize ulaşın.
          </p>
          <Link href="/iletisim" className="btn-primary inline-flex items-center group">
            İletişime Geç
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
