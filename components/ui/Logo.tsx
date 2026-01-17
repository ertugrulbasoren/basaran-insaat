'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
}

export default function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  return (
    <div className={cn('flex items-center', showText ? 'space-x-3' : 'justify-center', className)}>
      {/* Logo Image */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <img
          src="/images/logo.jpg"
          alt="Başaran İnşaat & Emlak Logo"
          className={cn(
            'object-contain',
            sizeClasses[size],
            'drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]'
          )}
          onError={(e) => {
            // Fallback: Logo yüklenemezse metin göster
            console.error('Logo yüklenemedi:', e);
            const target = e.target as HTMLImageElement;
            if (target) {
              target.style.display = 'none';
            }
          }}
        />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl -z-10 animate-pulse-slow" />
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-heading text-xl md:text-2xl font-bold text-light-50 leading-tight tracking-tight">
            BAŞARAN
          </span>
          <span className="text-[10px] md:text-xs text-primary-500 font-semibold tracking-wider uppercase leading-tight">
            İNŞAAT & EMLAK
          </span>
        </div>
      )}
    </div>
  )
}
