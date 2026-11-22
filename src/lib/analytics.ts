import { profile } from '../data/profile'

/** Loads Google Analytics 4 when profile.analyticsId is set. */
export function initAnalytics() {
  const id = profile.analyticsId
  if (!id || typeof window === 'undefined') return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void }
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() { w.dataLayer.push(arguments) } // eslint-disable-line prefer-rest-params
  w.gtag('js', new Date())
  w.gtag('config', id)
}
