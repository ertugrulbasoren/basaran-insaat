'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Hammer, Home } from 'lucide-react'
import { services } from '@/lib/constants'

const iconMap: Record<string, typeof Building2> = {
  Building: Building2,
  Hammer: Hammer,
  Home: Home,
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-dark-100 relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto">
            İnşaat sektöründe sunduğumuz kapsamlı hizmetler ile ihtiyaçlarınıza çözüm üretiyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block card-hover h-full bg-dark-200/50 hover:border-primary-500/50 relative overflow-hidden"
                >
                  {/* Gold Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500" />

                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-subheading font-semibold text-light-50 mb-3 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-light-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
