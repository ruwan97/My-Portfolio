import { motion } from 'motion/react'
import { ArrowUpRight, Briefcase, CreditCard as CardIcon, Play, CreditCard, Gauge, GraduationCap, Mail, ShieldCheck, Wallet } from 'lucide-react'
import { about, education, experience, focus, marquee, profile, projects, showcase, skillGroups } from '../data/profile'
import { duration, useLiveStats } from '../lib/live'
import { useEffect, useRef, useState } from 'react'
import { Counter, GithubIcon, LinkedinIcon, Reveal, SectionHeading, SpotCard } from './ui'

const focusIcons = [Wallet, CreditCard, Gauge, ShieldCheck]

export function About() {
  const stats = useLiveStats()
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" kicker="About me" title={<>Engineering the systems <span className="text-gradient">behind everyday payments</span></>} />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-[15px] leading-relaxed text-slate-400 md:text-base">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <SpotCard className="h-full p-5">
                <p className="font-display text-3xl font-bold text-white md:text-4xl"><Counter to={s.value} suffix={s.suffix} /></p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">{s.label}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map((f, i) => {
          const Icon = focusIcons[i % focusIcons.length]
          return (
            <Reveal key={f.title} delay={i * 0.08}>
              <SpotCard className="group h-full p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 p-2.5 text-accent ring-1 ring-white/10 transition group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </SpotCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export function Skills() {
  const row = [...marquee, ...marquee]
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="02" kicker="Tech stack" title={<>Tools I use to <span className="text-gradient">ship with confidence</span></>} />
      </div>
      <div className="relative mb-14 overflow-hidden border-y border-white/5 bg-white/[0.015] py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max gap-10">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-slate-500 md:text-3xl">
              {t}<span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 md:px-8">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.name} delay={gi * 0.08}>
            <SpotCard className="h-full p-6">
              <h3 className="mb-4 flex items-center justify-between font-display text-lg font-semibold text-white">
                {g.name}
                <span className="font-mono text-xs text-slate-500">{String(g.items.length).padStart(2, '0')}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-accent/40 hover:text-white"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </SpotCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="03" kicker="Experience" title={<>Where I’ve <span className="text-gradient">made an impact</span></>} />
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute left-[11px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent2/50 to-transparent md:left-[15px]"
        />
        <div className="space-y-10">
          {experience.map((e) => (
            <Reveal key={e.company} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ink ring-2 ring-accent md:h-8 md:w-8">
                <Briefcase size={13} className="text-accent" />
              </span>
              <SpotCard className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{e.company}</h3>
                    <p className="mt-1 text-sm text-slate-500">{e.location}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300">{e.period} · {duration(e.period)}</span>
                </div>
                <div className="mt-5 space-y-3 border-l border-white/10 pl-4">
                  {e.roles.map((r, i) => (
                    <div key={r.title} className="relative">
                      <span className={`absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-accent shadow-[0_0_10px_#22d3ee]' : 'bg-slate-600'}`} />
                      <p className={`font-medium ${i === 0 ? 'text-accent' : 'text-slate-200'}`}>{r.title}</p>
                      <p className="font-mono text-xs text-slate-500">{r.period} · {duration(r.period)} · {r.type}</p>
                    </div>
                  ))}
                </div>
                {e.highlight && (
                  <div className="mt-5 flex gap-3 rounded-xl border border-pink-400/30 bg-pink-500/10 p-4 text-[15px] leading-relaxed text-pink-100">
                    <CardIcon size={18} className="mt-0.5 shrink-0 text-pink-300" />{e.highlight}
                  </div>
                )}
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => <span key={t} className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">{t}</span>)}
                </div>
              </SpotCard>
            </Reveal>
          ))}
          {education.map((ed) => (
            <Reveal key={ed.school} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ink ring-2 ring-accent2 md:h-8 md:w-8">
                <GraduationCap size={13} className="text-accent2" />
              </span>
              <SpotCard className="p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-accent2">Education</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{ed.school}</h3>
                {ed.degree && <p className="mt-1 text-slate-400">{ed.degree}</p>}
                {ed.period && <p className="mt-1 font-mono text-xs text-slate-500">{ed.period}</p>}
                {ed.note && <p className="mt-3 text-sm text-slate-400">{ed.note}</p>}
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Showcase() {
  const [playing, setPlaying] = useState(false)
  const [near, setNear] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  // Don't download the video until it's close to the screen — keeps first load fast.
  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect() } }, { rootMargin: '600px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section id="product" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="04" kicker="Product I build" title={<>The app my code <span className="text-gradient">runs behind</span></>} />
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-pink-500/50 via-fuchsia-500/20 to-pink-300/40 blur-lg" />
            <div ref={boxRef} className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-panel">
              {playing ? (
                <video className="absolute inset-0 h-full w-full object-cover" src={showcase.video} poster={showcase.poster} autoPlay controls playsInline />
              ) : (
                <button onClick={() => setPlaying(true)} aria-label={`Play ${showcase.name} video`} className="group absolute inset-0 h-full w-full">
                  {near ? (
                    <video className="absolute inset-0 h-full w-full object-cover" src={showcase.video} poster={showcase.poster} autoPlay muted loop playsInline preload="auto" />
                  ) : (
                    <img src={showcase.poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-2xl shadow-pink-500/40 transition group-hover:scale-110">
                    <Play size={20} className="ml-0.5 fill-current" />
                  </span>
                  <span className="absolute bottom-5 left-5 text-left font-display text-base font-semibold text-white md:text-lg">{showcase.name}<span className="mt-0.5 block font-sans text-xs font-normal text-white/70">Tap to play with music</span></span>
                </button>
              )}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Concept animation I made for this portfolio. Screens are illustrative, not the real app, and this is not an official LB Finance advertisement.</p>
        </Reveal>
        <div>
          <Reveal><p className="leading-relaxed text-slate-400">{showcase.text}</p></Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex gap-4 rounded-2xl border border-pink-400/30 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-lg shadow-pink-500/30"><CardIcon size={20} /></div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-pink-300">Key feature</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">UnionPay Virtual Card</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Virtual card features', 'Card transactions', 'E-commerce payments', 'Tap to pay', 'QR payments'].map((f) => (
                    <span key={f} className="rounded-md border border-pink-400/30 bg-pink-500/10 px-2.5 py-1 text-xs text-pink-100">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">My role</p>
              <p className="mt-2 leading-relaxed text-slate-300">{showcase.myPart}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-3">
              {showcase.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white transition hover:border-accent/50 hover:bg-white/5">
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="05" kicker="Projects" title={<>Things I’ve <span className="text-gradient">built</span></>} />
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <motion.a href={p.url} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="block h-full">
              <SpotCard className="group flex h-full flex-col overflow-hidden">
                <div className="relative h-36 overflow-hidden border-b border-white/5 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-violet-500/10">
                  <div className="grid-bg absolute inset-0 opacity-60" />
                  <span className="absolute bottom-3 left-5 font-display text-5xl font-bold text-white/10 transition group-hover:text-white/20">0{i + 1}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/60 p-2 text-slate-300 ring-1 ring-white/10 transition group-hover:rotate-45 group-hover:text-accent">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-accent">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="font-mono text-xs text-slate-500">#{t}</span>)}
                  </div>
                </div>
              </SpotCard>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="mb-5 font-display text-lg font-semibold text-white">More on GitHub</h3>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <a href={p.url} target="_blank" rel="noreferrer" className="group block h-full">
              <SpotCard className="h-full p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-medium text-white transition group-hover:text-accent">{p.name}</h4>
                  <ArrowUpRight size={16} className="shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-1.5 text-sm text-slate-400">{p.desc}</p>
                <p className="mt-3 font-mono text-xs text-slate-500">{p.tags.join(' · ')}</p>
              </SpotCard>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-accent/50 hover:bg-white/5">
          <GithubIcon className="h-4 w-4" /> See all repositories
        </a>
      </Reveal>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-panel to-violet-600/15 px-6 py-16 text-center md:px-16 md:py-24">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-white/10"
          />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">06 · Contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let’s build something <span className="text-gradient">reliable</span> together.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-slate-400">
              {profile.openToWork ? 'Open to FinTech and full-stack roles, freelance work and collaborations.' : 'Happy to connect about FinTech, software engineering and collaborations.'} The fastest way to reach me is on LinkedIn.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent">
                <LinkedinIcon className="h-4 w-4" /> Connect on LinkedIn
              </a>
              {profile.email && (
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                  <Mail size={16} /> {profile.email}
                </a>
              )}
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 px-5 py-8 text-sm text-slate-500 md:flex-row md:px-8">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#top" className="font-mono text-xs transition hover:text-accent">Back to top ↑</a>
    </footer>
  )
}
