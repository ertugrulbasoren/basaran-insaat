import { Metadata } from 'next'
import { Award, Target, Eye, Users, User } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kurumsal',
  description: 'Başaran İnşaat & Emlak hakkında bilgiler, vizyonumuz, misyonumuz ve değerlerimiz.',
  openGraph: {
    title: 'Kurumsal | Başaran İnşaat & Emlak',
    description: 'Başaran İnşaat & Emlak hakkında bilgiler.',
  },
}

export default function CorporatePage() {
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
            Kurumsal
          </h1>
          <p className="text-light-400 text-lg md:text-xl max-w-3xl mx-auto">
            Başaran İnşaat & Emlak olarak sektördeki yerimiz, değerlerimiz ve hedeflerimiz.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-dark-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Hakkımızda
            </h2>
            <div className="space-y-4 text-light-300 leading-relaxed">
              <p>
                Başaran İnşaat & Emlak, 2009 yılından beri İstanbul&apos;da faaliyet gösteren, sektöründe
                öncü bir inşaat ve emlak firmasıdır. 15+ yıllık deneyimimiz ile kaliteli projeler
                üretmekte ve müşteri memnuniyetini en üst seviyede tutmaktayız.
              </p>
              <p>
                Kentsel dönüşüm, konut projeleri ve emlak danışmanlığı alanlarında sunduğumuz
                hizmetler ile binlerce ailenin hayallerini gerçekleştirmelerine katkıda bulunuyoruz.
              </p>
              <p>
                Güvenilirlik, kalite ve şeffaflık ilkelerimiz doğrultusunda, her projeyi titizlikle
                planlıyor ve zamanında teslim ediyoruz. Uzman ekibimiz ve kaliteli malzeme
                seçimlerimiz ile sektörde fark yaratıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="card p-8 bg-dark-200/50 backdrop-blur-sm border border-dark-300">
              <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Vizyonumuz</h2>
              <p className="text-light-300 leading-relaxed">
                İstanbul&apos;un en güvenilir ve saygın inşaat firması olmak. Sektörde yenilikçi
                yaklaşımımız ve kaliteli hizmetlerimiz ile öncü konumumuzu sürdürmek, müşterilerimizin
                güvenini kazanmak ve onların hayallerini gerçekleştirmelerine katkıda bulunmak.
              </p>
            </div>

            {/* Mission */}
            <div className="card p-8 bg-dark-200/50 backdrop-blur-sm border border-dark-300">
              <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Misyonumuz</h2>
              <p className="text-light-300 leading-relaxed">
                Müşterilerimize en kaliteli hizmeti sunmak, güvenilir ve şeffaf bir iş süreci yürütmek,
                sektördeki yenilikleri takip ederek modern çözümler üretmek. Her projede kalite ve
                güvenilirlik ilkelerimizden ödün vermeden, zamanında teslimat yaparak müşteri
                memnuniyetini en üst seviyede tutmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-500">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Değerlerimiz
            </h2>
            <p className="text-light-400 max-w-2xl mx-auto">
              Çalışma prensiplerimiz ve değerlerimiz ile sektörde fark yaratıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Eye,
                title: 'Şeffaflık',
                description: 'Tüm süreçlerde açık ve şeffaf bir iletişim anlayışı benimsiyoruz.',
              },
              {
                icon: Award,
                title: 'Kalite',
                description: 'Her projede en yüksek kalite standartlarını uyguluyoruz.',
              },
              {
                icon: Users,
                title: 'Müşteri Odaklılık',
                description: 'Müşteri memnuniyeti her zaman önceliğimizdir.',
              },
              {
                icon: Target,
                title: 'Güvenilirlik',
                description: 'Verdiğimiz sözleri tutar, güvenilir bir ortak olmanın gururunu yaşarız.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="card p-6 bg-dark-100/50 backdrop-blur-sm border border-dark-200 hover:border-primary-500/50 transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-subheading font-semibold text-light-50 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-light-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Person */}
      {siteConfig.contactPerson && (
        <section className="section-padding bg-dark-100">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="card p-8 bg-dark-200/50 backdrop-blur-sm border border-dark-300 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Firma Yetkilisi
                </h2>
                <p className="text-xl text-primary-500 font-semibold mb-2">
                  {siteConfig.contactPerson}
                </p>
                <p className="text-light-400">
                  Tüm sorularınız için bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
