'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { formatPhoneNumber, formatWhatsAppNumber } from '@/lib/utils'

export default function ContactCTA() {
  const whatsappNumber = formatWhatsAppNumber(siteConfig.links.phone)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, Başaran İnşaat hakkında bilgi almak istiyorum.`

  return (
    <section className="section-padding bg-gradient-to-br from-dark-500 via-dark-100 to-dark-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Hayalinizdeki Konuta{' '}
            <span className="text-gradient">Birlikte Ulaşalım</span>
          </h2>
          <p className="text-light-400 text-lg mb-10 max-w-2xl mx-auto">
            Projelerimiz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçin.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Phone */}
            <motion.a
              href={`tel:${siteConfig.links.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-subheading font-semibold text-light-50 mb-2">Telefon</h3>
              <p className="text-light-400 text-sm group-hover:text-primary-400 transition-colors">
                {formatPhoneNumber(siteConfig.links.phone)}
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${siteConfig.links.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-subheading font-semibold text-light-50 mb-2">E-posta</h3>
              <p className="text-light-400 text-sm group-hover:text-primary-400 transition-colors break-all">
                {siteConfig.links.email}
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-subheading font-semibold text-light-50 mb-2">WhatsApp</h3>
              <p className="text-light-400 text-sm group-hover:text-primary-400 transition-colors">
                Hemen Mesaj Gönder
              </p>
            </motion.a>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/iletisim" className="btn-primary group">
              İletişim Formu
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projeler" className="btn-outline group">
              Projelerimizi İnceleyin
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
