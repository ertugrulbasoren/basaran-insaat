'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Search, MapPin, Filter } from 'lucide-react'
import { projects } from '@/lib/content'
import { Project } from '@/types'

type FilterStatus = 'all' | 'ongoing' | 'planned'

export default function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStatus = statusFilter === 'all' || project.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [searchQuery, statusFilter])

  const statusCounts = useMemo(() => {
    return {
      all: projects.length,
      ongoing: projects.filter((p) => p.status === 'ongoing').length,
      planned: projects.filter((p) => p.status === 'planned').length,
    }
  }, [])

  const filterButtons = [
    { id: 'all' as FilterStatus, label: 'Tümü', count: statusCounts.all },
    { id: 'ongoing' as FilterStatus, label: 'Devam Eden', count: statusCounts.ongoing },
    { id: 'planned' as FilterStatus, label: 'Planlanan', count: statusCounts.planned },
  ]

  return (
    <section className="section-padding bg-dark-500">
      <div className="container-custom">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-400" />
            <input
              type="text"
              placeholder="Proje ara (ad, konum, açıklama)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-100 border border-dark-200 rounded-lg text-light-200 placeholder-light-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 text-light-400 mr-4">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium">Filtrele:</span>
            </div>
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setStatusFilter(button.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  statusFilter === button.id
                    ? 'bg-primary-500 text-dark-500 shadow-lg shadow-primary-500/50'
                    : 'bg-dark-100 text-light-300 border border-dark-200 hover:border-primary-500/50 hover:text-primary-400'
                }`}
              >
                {button.label}
                {button.count > 0 && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      statusFilter === button.id
                        ? 'bg-dark-500/20 text-dark-700'
                        : 'bg-dark-200 text-light-400'
                    }`}
                  >
                    {button.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-light-400 text-sm">
            {filteredProjects.length > 0 ? (
              <span>
                <span className="text-primary-500 font-semibold">{filteredProjects.length}</span> proje bulundu
              </span>
            ) : (
              <span>Sonuç bulunamadı</span>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16"
            >
              <p className="text-light-400 text-lg mb-4">
                Aradığınız kriterlere uygun proje bulunamadı.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setStatusFilter('all')
                }}
                className="btn-primary"
              >
                Filtreleri Temizle
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/projeler/${project.slug}`}
        className="group block card-hover overflow-hidden h-full bg-dark-100/50 backdrop-blur-sm"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-dark-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/50 to-transparent z-10" />
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-contain"
          />
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
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
          <h3 className="text-xl md:text-2xl font-subheading font-semibold text-light-50 mb-3 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center text-light-400 text-sm mb-4 space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>
          <p className="text-light-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.features.area && (
                <div className="px-3 py-1 bg-dark-200 rounded-lg text-xs text-light-300">
                  {project.features.area} m²
                </div>
              )}
              {project.features.units && (
                <div className="px-3 py-1 bg-dark-200 rounded-lg text-xs text-light-300">
                  {project.features.units} Daire
                </div>
              )}
              {project.features.shops && (
                <div className="px-3 py-1 bg-dark-200 rounded-lg text-xs text-light-300">
                  {project.features.shops} Dükkan
                </div>
              )}
              {project.features.floors && (
                <div className="px-3 py-1 bg-dark-200 rounded-lg text-xs text-light-300">
                  {project.features.floors} Kat
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center text-primary-500 font-medium text-sm group-hover:gap-2 transition-all">
            Detayları Gör
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
