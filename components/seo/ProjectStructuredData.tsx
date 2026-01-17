import { Project } from '@/types'

interface ProjectStructuredDataProps {
  project: Project
}

export default function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    name: project.title,
    description: project.description,
    url: `https://basaraninsaat.net.tr/projeler/${project.slug}`,
    image: `https://basaraninsaat.net.tr${project.featuredImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: project.location,
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    numberOfUnits: project.features?.units,
    numberOfFloors: project.features?.floors,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: project.features?.area,
      unitCode: 'MTK',
    },
    ...(project.features?.startDate && project.features?.endDate && {
      datePublished: project.features.startDate,
      dateModified: project.features.endDate,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  )
}
