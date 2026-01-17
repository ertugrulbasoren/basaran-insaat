import { Layers, Home, Calendar, MapPin, Store } from 'lucide-react'

interface ProjectFeatures {
  area?: string
  units?: number
  shops?: number
  floors?: number
  startDate?: string
  endDate?: string
}

interface ProjectFeaturesProps {
  features: ProjectFeatures
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const featureItems = [
    {
      icon: Layers,
      label: 'Toplam Alan',
      value: features.area ? `${features.area} m²` : null,
    },
    {
      icon: Home,
      label: 'Daire Sayısı',
      value: features.units ? `${features.units} Daire` : null,
    },
    {
      icon: Store,
      label: 'Dükkan Sayısı',
      value: features.shops ? `${features.shops} Dükkan` : null,
    },
    {
      icon: Layers,
      label: 'Kat Sayısı',
      value: features.floors ? `${features.floors} Kat` : null,
    },
    {
      icon: Calendar,
      label: 'Tahmini Teslim',
      value: features.endDate
        ? new Date(features.endDate).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
          })
        : null,
    },
  ].filter((item) => item.value !== null)

  if (featureItems.length === 0) {
    return null
  }

  return (
    <div className="card p-8 bg-dark-100/50 backdrop-blur-sm">
      <h2 className="text-2xl font-subheading font-semibold text-light-50 mb-6">
        Teknik Özellikler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-dark-200/50 border border-dark-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <div className="text-light-400 text-sm mb-1">{item.label}</div>
                <div className="text-light-50 font-semibold text-lg">{item.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
