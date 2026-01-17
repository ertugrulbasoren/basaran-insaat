'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { projects } from '@/lib/content'

const featuredProjects = projects.filter(p => p.featured).slice(0, 6)

export default function FeaturedProjects() {
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
            Öne Çıkan <span className="text-gradient">Projelerimiz</span>
          </h2>
          <p className="text-light-400 max-w-2xl mx-auto">
            Tamamladığımız ve devam eden projelerimizden bir seçki.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/projeler/${project.slug}`}
                className="group block card-hover overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-dark-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent z-10" />
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'ongoing'
                          ? 'bg-primary-500/90 text-dark-500'
                          : 'bg-blue-500/90 text-white'
                      }`}
                    >
                      {project.status === 'ongoing'
                        ? 'Devam Ediyor'
                        : 'Planlandı'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-subheading font-semibold text-light-50 mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-light-400 text-sm mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    {project.features?.area && (
                      <div className="flex items-center space-x-1">
                        <span>{project.features.area} m²</span>
                      </div>
                    )}
                  </div>
                  <p className="text-light-400 text-sm mb-4 overflow-hidden text-ellipsis line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary-500 font-medium text-sm group-hover:gap-2 transition-all">
                    Detayları Gör
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projeler" className="btn-secondary inline-flex items-center">
            Tüm Projeleri Gör
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
