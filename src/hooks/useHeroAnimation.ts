import { useEffect, useState } from "react"

type Options = {
  length: number
  interval?: number
}

export function useHeroAnimation({ length, interval = 3000 }: Options) {
  const [scrollY, setScrollY] = useState(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (length === 0) return

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [length, interval])

  useEffect(() => {
    setIndex(0)
  }, [length])

  return { scrollY, index }
}