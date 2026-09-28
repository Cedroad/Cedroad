import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import {
  fullpageScrollToId,
  installFullpageScroll,
} from '@/lib/fullpageScroll'

type ScrollToFn = (id: string) => void

const SmoothScrollContext = createContext<ScrollToFn | null>(null)

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    installFullpageScroll()
  }, [])

  const scrollTo = useCallback<ScrollToFn>((id) => {
    if (!window.matchMedia('(min-width: 900px)').matches) {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    fullpageScrollToId(id)
  }, [])

  const value = useMemo(() => scrollTo, [scrollTo])

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext)
  if (!ctx) {
    return (id: string) => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return ctx
}
