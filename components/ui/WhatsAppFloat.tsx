'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/constants'
import { formatWhatsAppNumber } from '@/lib/utils'

export default function WhatsAppFloat() {
  const whatsappNumber = formatWhatsAppNumber(siteConfig.links.phone)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, Başaran İnşaat hakkında bilgi almak istiyorum.`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <motion.span
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full border-2 border-dark-500 animate-pulse" />
      </Link>
    </motion.div>
  )
}
