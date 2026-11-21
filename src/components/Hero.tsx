import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, Typewriter } from './ui'

const ease = [0.22, 1, 0.36, 1] as const
const item = (d: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease },
})

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div>
          <motion.div {...item(0.1)} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.p {...item(0.2)} className="mt-6 font-mono text-sm text-slate-400">Hi, I’m</motion.p>
          <motion.h1 {...item(0.3)} className="mt-2 font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.div {...item(0.45)} className="mt-4 h-[1.3em] font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
            <Typewriter words={profile.roles} />
          </motion.div>
          <motion.p {...item(0.6)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div {...item(0.75)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-indigo-400 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40">
              View my work <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            {profile.cv && (
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5">
                <Download size={16} /> Download CV
              </a>
            )}
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-accent/50 hover:text-white">
              <GithubIcon />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-accent/50 hover:text-white">
              <LinkedinIcon />
            </a>
          </motion.div>
          <motion.p {...item(0.85)} className="mt-6 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative mx-auto w-full max-w-md px-2 sm:px-0"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-accent2/40 blur-sm" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/90 shadow-2xl shadow-black/60 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-slate-500">WalletTransferService.java</span>
            </div>
            <div className="flex items-center gap-4 border-b border-white/5 px-5 py-4">
              <div className="relative h-14 w-14 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent2 font-display text-lg font-bold text-ink">RC</div>
                <img src={profile.avatar} alt={profile.name} onError={(e) => (e.currentTarget.style.display = 'none')} className="relative h-14 w-14 rounded-2xl object-cover ring-2 ring-accent/40" />
              </div>
              <div>
                <p className="font-display font-semibold text-white">{profile.name}</p>
                <p className="text-xs text-slate-400">{profile.title}</p>
              </div>
            </div>
            <pre className="overflow-x-auto p-5 pb-12 font-mono text-[11.5px] leading-6 sm:text-[12.5px]">
<span className="text-violet-400">@Transactional</span>{'\n'}
<span className="text-sky-400">public</span> <span className="text-emerald-300">Receipt</span> <span className="text-yellow-200">transfer</span>(<span className="text-emerald-300">TransferRequest</span> req) {'{'}{'\n'}
{'  '}validator.<span className="text-yellow-200">check</span>(req);{'\n'}
{'  '}<span className="text-sky-400">var</span> tx = ledger.<span className="text-yellow-200">debit</span>(req.<span className="text-yellow-200">from</span>(), req.<span className="text-yellow-200">amount</span>());{'\n'}
{'  '}ledger.<span className="text-yellow-200">credit</span>(req.<span className="text-yellow-200">to</span>(), req.<span className="text-yellow-200">amount</span>());{'\n'}
{'  '}events.<span className="text-yellow-200">publishAsync</span>(tx);{'\n'}
{'  '}<span className="text-sky-400">return</span> Receipt.<span className="text-yellow-200">of</span>(tx); <span className="text-slate-500">// ✓ every cent counts</span>{'\n'}
{'}'}
            </pre>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -bottom-7 -left-1 rounded-2xl px-4 py-3 sm:-left-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Key feature</p>
            <p className="font-display text-lg font-semibold text-white">UnionPay Virtual Card</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -right-1 -top-7 rounded-2xl px-4 py-3 sm:-right-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Stack</p>
            <p className="font-display text-lg font-semibold text-gradient">Java · Spring</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 md:block"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
