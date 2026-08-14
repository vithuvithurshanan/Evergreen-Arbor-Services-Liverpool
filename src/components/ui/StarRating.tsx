import { Star } from 'lucide-react'

interface StarRatingProps {
  /** 0–5, supports half-stars via decimals */
  rating: number
  maxRating?: number
  ariaLabel?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 14,
  md: 18,
  lg: 24,
}

/**
 * Renders filled / half / empty stars for a given rating.
 * Half-star logic: a position is "half" when the fractional part of the
 * rating puts it between n-1 and n (i.e. rating rounded to nearest 0.5
 * leaves exactly 0.5 above the integer below this star).
 */
export function StarRating({
  rating,
  maxRating = 5,
  ariaLabel,
  size = 'md',
}: StarRatingProps) {
  const clampedRating = Math.min(Math.max(rating, 0), maxRating)
  const px = sizeMap[size]

  const label = ariaLabel ?? `Rated ${clampedRating} out of ${maxRating} stars`

  const stars = Array.from({ length: maxRating }, (_, i) => {
    const position = i + 1
    // Full star: rating is at or above this position
    if (clampedRating >= position) {
      return 'full' as const
    }
    // Half star: rating is within [position - 0.5, position)
    if (clampedRating >= position - 0.5) {
      return 'half' as const
    }
    return 'empty' as const
  })

  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center gap-0.5"
    >
      {stars.map((type, i) => {
        if (type === 'full') {
          return (
            <Star
              key={i}
              width={px}
              height={px}
              className="fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
          )
        }

        if (type === 'half') {
          // Overlay technique: full star clipped to 50% on top of empty star
          return (
            <span key={i} className="relative inline-flex" style={{ width: px, height: px }}>
              {/* Empty base */}
              <Star
                width={px}
                height={px}
                className="text-gray-300"
                aria-hidden="true"
              />
              {/* Filled half, clipped to left 50% */}
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: '50%' }}
                aria-hidden="true"
              >
                <Star
                  width={px}
                  height={px}
                  className="fill-yellow-400 text-yellow-400"
                />
              </span>
            </span>
          )
        }

        return (
          <Star
            key={i}
            width={px}
            height={px}
            className="text-gray-300"
            aria-hidden="true"
          />
        )
      })}
    </span>
  )
}
