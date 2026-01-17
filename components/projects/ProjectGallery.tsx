'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Play, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types'

interface ProjectGalleryProps {
  project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images || [project.featuredImage]
  // videos array varsa onu kullan, yoksa video varsa onu array'e çevir
  const videos = project.videos || (project.video ? [project.video] : [])
  const hasVideos = videos.length > 0
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  // Tüm medya: önce videolar, sonra görseller
  const allMedia: Array<{ type: 'video' | 'image'; src: string; index?: number }> = [
    ...videos.map((video, idx) => ({ type: 'video' as const, src: video, index: idx })),
    ...images.map((img) => ({ type: 'image' as const, src: img }))
  ]

  const currentMedia = allMedia[currentIndex]
  const isVideo = currentMedia?.type === 'video'

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length)
    if (allMedia[(currentIndex + 1) % allMedia.length]?.type === 'video') {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }
  }

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
    const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length
    if (allMedia[prevIndex]?.type === 'video') {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
    }
  }

  const goToMedia = (index: number) => {
    setCurrentIndex(index)
    if (allMedia[index]?.type === 'video') {
      setCurrentVideoIndex(allMedia[index].index || 0)
    }
  }

  return (
    <>
      <div className="card p-0 overflow-hidden bg-dark-100/50 backdrop-blur-sm">
        {/* Main Media (Video or Image) */}
        <div className="relative aspect-video bg-dark-200 overflow-hidden group flex items-center justify-center">
          {isVideo && currentMedia ? (
            <video
              key={currentMedia.src}
              src={currentMedia.src}
              controls
              className="w-full h-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={currentMedia?.src || project.featuredImage}
              alt={`${project.title} - Görsel ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          )}
          
          {/* Navigation Arrows */}
          {allMedia.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-500/80 backdrop-blur-sm border border-dark-200 flex items-center justify-center text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Önceki medya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-500/80 backdrop-blur-sm border border-dark-200 flex items-center justify-center text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Sonraki medya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Media Type Indicator */}
          {isVideo && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary-500/90 backdrop-blur-sm border border-primary-400 text-dark-500 text-xs font-medium flex items-center space-x-1">
              <Play className="w-3 h-3" />
              <span>Video {videos.length > 1 ? `${currentVideoIndex + 1}/${videos.length}` : ''}</span>
            </div>
          )}

          {/* Media Counter */}
          {allMedia.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-dark-500/80 backdrop-blur-sm border border-dark-200 text-light-200 text-sm">
              {currentIndex + 1} / {allMedia.length}
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-dark-500/80 backdrop-blur-sm border border-dark-200 text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all opacity-0 group-hover:opacity-100 text-sm font-medium z-10"
          >
            Tam Ekran
          </button>
        </div>

        {/* Thumbnail Navigation */}
        {allMedia.length > 1 && (
          <div className="p-4 grid grid-cols-4 md:grid-cols-6 gap-2 bg-dark-200/50">
            {allMedia.slice(0, 6).map((media, index) => {
              const isVideoThumb = media.type === 'video'
              
              return (
                <button
                  key={`${media.type}-${index}-${media.src}`}
                  onClick={() => goToMedia(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all relative ${
                    currentIndex === index
                      ? 'border-primary-500 ring-2 ring-primary-500/50'
                      : 'border-dark-300 hover:border-primary-500/50'
                  }`}
                >
                  {isVideoThumb ? (
                    <div className="w-full h-full bg-dark-100 flex items-center justify-center relative">
                      <video
                        src={media.src}
                        className="w-full h-full object-contain"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-dark-500/40 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-500" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={media.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 25vw, 20vw"
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-500/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all z-10"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video bg-dark-200 rounded-lg overflow-hidden flex items-center justify-center">
                {isVideo && currentMedia ? (
                  <video
                    key={currentMedia.src}
                    src={currentMedia.src}
                    controls
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={currentMedia?.src || project.featuredImage}
                    alt={`${project.title} - Görsel ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                  />
                )}

                {allMedia.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-light-200 hover:bg-primary-500 hover:text-dark-500 transition-all z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
