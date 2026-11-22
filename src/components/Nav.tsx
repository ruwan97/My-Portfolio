import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'product', label: 'LB CIM' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-indigo-400 to-accent2" />
      <motion.header
        initial={false}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
      >
        <nav className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? 'border border-white/10 bg-[#0b0d14]/90 shadow-lg shadow-black/40 backdrop-blur-xl' : 'border border-transparent'}`}>
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
            Ruwan<span className="text-accent"> </span>Chamikara
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${active === l.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                  {active === l.id && (
                    <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-accent md:block">
            Let’s talk
          </a>
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="rounded-lg p-2 text-white md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-3xl font-semibold text-white"
              >
                <span className="mr-3 font-mono text-sm text-accent">0{i + 1}</span>{l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
