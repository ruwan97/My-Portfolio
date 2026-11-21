import { useEffect, useState } from 'react'
import { careerStart, stats as baseStats } from '../data/profile'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMonth(text: string): Date | null {
  const t = text.trim()
  if (/present/i.test(t)) return new Date()
  const [mon, year] = t.split(/\s+/)
  const m = MONTHS.indexOf(mon.slice(0, 3))
  return m < 0 || !year ? null : new Date(Number(year), m, 1)
}

/** "Mar 2024 — Present" → "2 yrs 9 mos" (counted the way LinkedIn does: both months included). */
export function duration(period: string): string {
  const [a, b] = period.split(/\s*[—–-]\s*/)
  const start = parseMonth(a ?? '')
  const end = parseMonth(b ?? '')
  if (!start || !end) return ''
  const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth() + 1
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts = []
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`)
  return parts.join(' ')
}

export function yearsSince(date: string): number {
  const start = new Date(date)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) years--
  return Math.max(years, 0)
}

/** Stats with auto values filled in: years from careerStart, repo count live from GitHub. */
export function useLiveStats() {
  const [repos, setRepos] = useState<number | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch('https://api.github.com/users/ruwan97', { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d && typeof d.public_repos === 'number') setRepos(d.public_repos) })
      .catch(() => {})
    return () => ctrl.abort()
  }, [])

  return baseStats.map((s) => {
    if (s.auto === 'years') return { ...s, value: yearsSince(careerStart) }
    if (s.auto === 'repos' && repos !== null) return { ...s, value: repos }
    return s
  })
}
