import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { branches, siteConfig } from '@/lib/constants'
import { formatPhoneNumber, formatWhatsAppNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Başaran İnşaat & Emlak ile iletişime geçin. Projelerimiz hakkında bilgi almak için bize ulaşın.',
  openGraph: {
    title: 'İletişim | Başaran İnşaat & Emlak',
    description: 'Başaran İnşaat & Emlak ile iletişime geçin.',
  },
}

export default function ContactPage() {
  const whatsappNumber = formatWhatsAppNumber(siteConfig.links.phone)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, Başaran İnşaat hakkında bilgi almak istiyorum.`

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
            İletişime <span className="text-gradient">Geçin</span>
          </h1>
          <p className="text-light-400 text-lg md:text-xl max-w-3xl mx-auto">
            Projelerimiz hakkında bilgi almak, randevu oluşturmak veya sorularınızı iletmek için
            bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-dark-500">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="card p-6 bg-dark-100/50 backdrop-blur-sm border border-dark-200 hover:border-primary-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-light-50 mb-2">Telefon</h3>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="text-light-300 hover:text-primary-500 transition-colors block"
                    >
                      {formatPhoneNumber(siteConfig.links.phone)}
                    </a>
                    <p className="text-light-500 text-sm mt-1">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card p-6 bg-dark-100/50 backdrop-blur-sm border border-dark-200 hover:border-primary-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-light-50 mb-2">E-posta</h3>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-light-300 hover:text-primary-500 transition-colors block break-all"
                    >
                      {siteConfig.links.email}
                    </a>
                    <p className="text-light-500 text-sm mt-1">24 saat içinde yanıt veriyoruz</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card p-6 bg-dark-100/50 backdrop-blur-sm border border-dark-200 hover:border-primary-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-light-50 mb-2">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-300 hover:text-primary-500 transition-colors block"
                    >
                      Hemen Mesaj Gönder
                    </a>
                    <p className="text-light-500 text-sm mt-1">Anında yanıt alın</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="card p-6 bg-dark-100/50 backdrop-blur-sm border border-dark-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-light-50 mb-3">Çalışma Saatleri</h3>
                    <div className="space-y-2 text-sm text-light-400">
                      <div className="flex justify-between">
                        <span>Pazartesi - Cuma:</span>
                        <span className="text-light-300">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cumartesi:</span>
                        <span className="text-light-300">09:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pazar:</span>
                        <span className="text-light-300">Kapalı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Şubemiz
            </h2>
            <p className="text-light-400 max-w-2xl mx-auto">
              Zeytinburnu'ndaki şubemizi ziyaret edebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="card p-6 bg-dark-200/50 backdrop-blur-sm border border-dark-300 hover:border-primary-500/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-subheading font-semibold text-light-50 mb-3">
                      {branch.name}
                    </h3>
                    <p className="text-light-400 text-sm mb-4 leading-relaxed">
                      {branch.address}
                    </p>
                    <div className="space-y-2 text-sm">
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-light-300 hover:text-primary-500 transition-colors block"
                      >
                        {formatPhoneNumber(branch.phone)}
                      </a>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-light-400 hover:text-primary-500 transition-colors block break-all"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="mt-12 card p-0 overflow-hidden bg-dark-200 border border-dark-300">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(branches[0]?.address || 'Yeşiltepe Mahallesi 54/1 Sokak No:26-1A Zeytinburnu İstanbul')}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
