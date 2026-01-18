import { siteConfig, branches } from '@/lib/constants'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://basaraninsaat.net.tr/#organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: 'https://basaraninsaat.net.tr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://basaraninsaat.net.tr/images/logo.jpg',
      width: 1211,
      height: 1103,
    },
    image: 'https://basaraninsaat.net.tr/images/logo.jpg',
    telephone: siteConfig.links.phone,
    email: siteConfig.links.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branches[0]?.address || '',
      addressLocality: 'Zeytinburnu',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.0123',
      longitude: '28.9123',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'İstanbul',
    },
    sameAs: [
      // Sosyal medya hesaplarınızı buraya ekleyebilirsiniz
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://basaraninsaat.net.tr/#website',
    url: 'https://basaraninsaat.net.tr',
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': 'https://basaraninsaat.net.tr/#organization',
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://basaraninsaat.net.tr/images/logo.jpg',
      width: 1211,
      height: 1103,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://basaraninsaat.net.tr/projeler?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
