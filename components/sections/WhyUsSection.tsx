'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Briefcase, Eye } from 'lucide-react'
import { whyUsReasons } from '@/lib/constants'

const iconMap: Record<string, typeof Shield> = {
  Shield: Shield,
  Award: Award,
  Briefcase: Briefcase,
  Eye: Eye,
}

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-dark-500">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Neden <span className="text-gradient">Başaran İnşaat?</span>
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto">
            Sektördeki deneyimimiz, kalitemiz ve müşteri odaklı yaklaşımımız ile fark yaratıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyUsReasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Shield

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="card-hover p-8 bg-dark-100/50 backdrop-blur-sm border border-dark-200 h-full">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-primary-500/20 border-2 border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300">
                        <Icon className="w-10 h-10 text-primary-500" />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-subheading font-semibold text-light-50 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-light-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
