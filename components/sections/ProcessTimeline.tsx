'use client'

import { motion } from 'framer-motion'
import { MapPin, PenTool, Hammer, Key } from 'lucide-react'
import { processSteps } from '@/lib/constants'

const iconMap: Record<string, typeof MapPin> = {
  MapPin: MapPin,
  PenTool: PenTool,
  Hammer: Hammer,
  Key: Key,
}

export default function ProcessTimeline() {
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
            İnşaat <span className="text-gradient">Sürecimiz</span>
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto">
            Hayalinizdeki konuta kavuşmanız için izlediğimiz adım adım süreç.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-dark-300 via-primary-500 to-dark-300" />

          <div className="grid grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || MapPin

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-16 h-16 rounded-full bg-dark-100 border-4 border-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/50">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="text-center mb-24">
                    <div className="inline-block w-12 h-12 rounded-full bg-primary-500/20 border-2 border-primary-500/50 flex items-center justify-center mb-4">
                      <span className="text-primary-500 font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-8">
                    <h3 className="text-xl font-subheading font-semibold text-light-50 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-light-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || MapPin

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-dark-200 border-2 border-primary-500/50 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center">
                      <span className="text-primary-500 font-bold text-sm">{step.step}</span>
                    </span>
                    <h3 className="text-lg font-subheading font-semibold text-light-50">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-light-400 text-sm leading-relaxed">
                    {step.description}
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
