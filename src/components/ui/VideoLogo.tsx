import { useRef, useEffect } from 'react'

interface VideoLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  lightText?: boolean
  className?: string
}

export function VideoLogo({
  size = 'md',
  showText = true,
  lightText = false,
  className = '',
}: VideoLogoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback catch
      })
    }
  }, [])

  // Oval sizes (horizontal ratio)
  const containerSizes = {
    sm: 'w-12 h-7 rounded-[2rem]',
    md: 'w-16 h-10 rounded-[2.5rem]',
    lg: 'w-20 h-12 rounded-[3rem]',
  }

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  }

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Video Badge Container with sleek Oval Shape */}
      <div
        className={`relative ${containerSizes[size]} flex-shrink-0 overflow-hidden p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-300 to-green-400 shadow-md group-hover:shadow-emerald-500/40 group-hover:scale-105 transition-all duration-300`}
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-950 flex items-center justify-center relative">
          <video
            ref={videoRef}
            src="/logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      {/* Brand Name Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold tracking-tight leading-none ${textSizes[size]} ${
              lightText
                ? 'text-white drop-shadow-sm'
                : 'text-slate-900 dark:text-white'
            }`}
          >
            Evergreen <span className="text-emerald-400">Arbor</span>
          </span>
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${
              lightText ? 'text-emerald-200/90' : 'text-emerald-700 font-bold'
            }`}
          >
            Services Liverpool
          </span>
        </div>
      )}
    </div>
  )
}
