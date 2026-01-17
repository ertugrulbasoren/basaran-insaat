'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '@/lib/constants'
import { useCountUp } from '@/hooks/useCountUp'

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const count = useCountUp(isInView, stat.value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="card-hover p-8 bg-dark-100/50 backdrop-blur-sm border border-dark-200">
        <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-500 mb-2">
          {count.toLocaleString()}
          {stat.suffix && <span className="text-3xl md:text-4xl">{stat.suffix}</span>}
        </div>
        <div className="text-lg md:text-xl font-subheading font-semibold text-light-100 mb-2">
          {stat.label}
        </div>
        <div className="text-sm text-light-400">
          {stat.description}
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
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
            Sayılarla <span className="text-gradient">Başaran İnşaat</span>
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto">
            Sektördeki deneyimimiz ve başarılarımız rakamlarla kanıtlanmış durumda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
