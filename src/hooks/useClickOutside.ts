import { useEffect } from 'react'
import type React from 'react'

/**
 * Calls `handler` when a mousedown or touchstart event fires outside of
 * `ref.current`. Cleans up both listeners on unmount.
 *
 * Satisfies: Req 1.4 (close mobile menu on outside click), Req 1.9
 */
export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (!ref.current || ref.current.contains(target)) return
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
