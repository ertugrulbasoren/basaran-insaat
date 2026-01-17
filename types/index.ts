export interface Project {
  id: string
  title: string
  location: string
  status: 'ongoing' | 'planned'
  featuredImage: string
  featured?: boolean
  images?: string[]
  video?: string
  videos?: string[]
  description: string
  features?: {
    area?: string
    units?: number
    shops?: number
    floors?: number
    startDate?: string
    endDate?: string
  }
  content?: string
  floorPlans?: string[]
  mapUrl?: string
  slug: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  href: string
  content?: string
}

export interface Stat {
  id: number
  value: number
  suffix?: string
  label: string
  description: string
}

export interface Branch {
  name: string
  address: string
  phone: string
  email: string
  mapUrl: string
}
