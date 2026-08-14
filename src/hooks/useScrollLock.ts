import { useEffect } from 'react'

/**
 * Locks `document.body` scroll when `isLocked` is true by setting
 * `overflow: hidden`. Saves the original overflow value and restores it when
 * `isLocked` becomes false or the component unmounts.
 *
 * Satisfies: Req 5.2 (lightbox prevents background scroll)
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isLocked) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isLocked])
}
