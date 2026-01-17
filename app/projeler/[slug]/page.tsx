import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Home, Layers, Download, MessageCircle, Store } from 'lucide-react'
import { projects } from '@/lib/content'
import ProjectGallery from '@/components/projects/ProjectGallery'
import ProjectFeatures from '@/components/projects/ProjectFeatures'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/lib/constants'
import { formatPhoneNumber, formatWhatsAppNumber } from '@/lib/utils'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Proje Bulunamadı',
    }
  }

  return {
    title: `${project.title} | Başaran İnşaat & Emlak`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Başaran İnşaat & Emlak`,
      description: project.description,
      images: [project.featuredImage],
    },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const whatsappNumber = formatWhatsAppNumber(siteConfig.links.phone)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, ${project.title} projesi hakkında bilgi almak istiyorum.`

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link
          href="/projeler"
          className="inline-flex items-center text-light-400 hover:text-primary-500 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Tüm Projelere Dön
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-dark-500">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Location */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                  {project.title}
                </h1>
                <div className="flex items-center text-light-400 space-x-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span>{project.location}</span>
                  </div>
                  {project.features?.startDate && project.features?.endDate && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary-500" />
                      <span>
                        {new Date(project.features.startDate).getFullYear()} -{' '}
                        {new Date(project.features.endDate).getFullYear()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery */}
              <ProjectGallery project={project} />

              {/* Description */}
              <div className="card p-8 bg-dark-100/50 backdrop-blur-sm">
                <h2 className="text-2xl font-subheading font-semibold text-light-50 mb-4">
                  Proje Hakkında
                </h2>
                <p className="text-light-300 leading-relaxed">{project.description}</p>
                {project.content && (
                  <div className="mt-6 text-light-300 leading-relaxed">{project.content}</div>
                )}
              </div>

              {/* Features */}
              {project.features && <ProjectFeatures features={project.features} />}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info Card */}
              <div className="card p-6 bg-dark-100/50 backdrop-blur-sm sticky top-24">
                <h3 className="text-xl font-subheading font-semibold text-light-50 mb-6">
                  Proje Bilgileri
                </h3>
                <div className="space-y-4">
                  {project.features?.area && (
                    <div className="flex items-center justify-between py-2 border-b border-dark-200">
                      <span className="text-light-400 flex items-center">
                        <Layers className="w-4 h-4 mr-2 text-primary-500" />
                        Toplam Alan
                      </span>
                      <span className="text-light-50 font-medium">
                        {project.features.area} m²
                      </span>
                    </div>
                  )}
                  {project.features?.units && (
                    <div className="flex items-center justify-between py-2 border-b border-dark-200">
                      <span className="text-light-400 flex items-center">
                        <Home className="w-4 h-4 mr-2 text-primary-500" />
                        Daire Sayısı
                      </span>
                      <span className="text-light-50 font-medium">
                        {project.features.units} Daire
                      </span>
                    </div>
                  )}
                  {project.features?.shops && (
                    <div className="flex items-center justify-between py-2 border-b border-dark-200">
                      <span className="text-light-400 flex items-center">
                        <Store className="w-4 h-4 mr-2 text-primary-500" />
                        Dükkan Sayısı
                      </span>
                      <span className="text-light-50 font-medium">
                        {project.features.shops} Dükkan
                      </span>
                    </div>
                  )}
                  {project.features?.floors && (
                    <div className="flex items-center justify-between py-2 border-b border-dark-200">
                      <span className="text-light-400 flex items-center">
                        <Layers className="w-4 h-4 mr-2 text-primary-500" />
                        Kat Sayısı
                      </span>
                      <span className="text-light-50 font-medium">
                        {project.features.floors} Kat
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    WhatsApp ile İletişim
                  </a>
                  <Link
                    href="/iletisim"
                    className="btn-outline w-full flex items-center justify-center group"
                  >
                    İletişim Formu
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-dark-200">
                  <p className="text-light-400 text-sm mb-4">Hızlı İletişim:</p>
                  <a
                    href={`tel:${siteConfig.links.phone}`}
                    className="text-primary-500 hover:text-primary-400 text-sm font-medium block mb-2"
                  >
                    {formatPhoneNumber(siteConfig.links.phone)}
                  </a>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-light-400 hover:text-primary-400 text-sm block break-all"
                  >
                    {siteConfig.links.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Bu Proje Hakkında{' '}
              <span className="text-gradient">Bilgi Alın</span>
            </h2>
            <p className="text-light-400 max-w-2xl mx-auto">
              {project.title} projesi hakkında detaylı bilgi almak için formu doldurun. En kısa sürede size dönüş yapacağız.
            </p>
          </div>
          <ContactForm projectName={project.title} />
        </div>
      </section>
    </div>
  )
}
