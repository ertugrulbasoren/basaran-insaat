'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface ContactFormProps {
  projectName?: string
}

export default function ContactForm({ projectName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: projectName || '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: API endpoint'e gönder
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: projectName || '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="card p-8 bg-dark-100/50 backdrop-blur-sm">
      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-subheading font-semibold text-light-50 mb-3">
            Mesajınız Başarıyla Gönderildi!
          </h3>
          <p className="text-light-400 mb-6">
            En kısa sürede size dönüş yapacağız. İlginiz için teşekkür ederiz.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="btn-primary"
          >
            Yeni Mesaj Gönder
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-light-300 text-sm font-medium mb-2">
                Ad Soyad <span className="text-primary-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-light-200 placeholder-light-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                placeholder="Adınız ve Soyadınız"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-light-300 text-sm font-medium mb-2">
                Telefon <span className="text-primary-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-light-200 placeholder-light-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                placeholder="05XX XXX XX XX"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-light-300 text-sm font-medium mb-2">
              E-posta <span className="text-primary-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-light-200 placeholder-light-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="ornek@email.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-light-300 text-sm font-medium mb-2">
              Konu <span className="text-primary-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-light-200 placeholder-light-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="Mesaj konusu"
              disabled={!!projectName}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-light-300 text-sm font-medium mb-2">
              Mesaj <span className="text-primary-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-light-200 placeholder-light-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
              placeholder="Mesajınızı buraya yazın..."
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
              </p>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Mesaj Gönder
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-light-500 text-xs text-center">
            Gönderdiğiniz bilgiler gizlilik politikamız kapsamında korunmaktadır.
          </p>
        </form>
      )}
    </div>
  )
}
