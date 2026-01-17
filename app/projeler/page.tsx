import { Metadata } from 'next'
import ProjectsList from '@/components/projects/ProjectsList'

export const metadata: Metadata = {
  title: 'Projelerimiz',
  description: 'Tamamladığımız, devam eden ve planlanan konut projelerimizi keşfedin. İstanbul\'da güvenilir inşaat çözümleri.',
  openGraph: {
    title: 'Projelerimiz | Başaran İnşaat & Emlak',
    description: 'Tamamladığımız, devam eden ve planlanan konut projelerimizi keşfedin.',
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-500 via-dark-100 to-dark-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Projelerimiz
          </h1>
          <p className="text-light-400 text-lg md:text-xl max-w-3xl mx-auto">
            Tamamladığımız, devam eden ve planlanan konut projelerimizi keşfedin.
            Her proje, kalite ve güvenilirliğin bir göstergesidir.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <ProjectsList />
    </div>
  )
}
