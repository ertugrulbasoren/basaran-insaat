import HeroSection from '@/components/sections/HeroSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessTimeline />
      <ContactCTA />
    </>
  )
}
