import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Green energy storage materials',
    desc: 'Developing thin‑film electrodes and solid electrolytes for next‑gen batteries.',
  },
  {
    title: 'Smart city sensing platform',
    desc: 'IoT network for environmental monitoring and urban analytics.',
  },
  {
    title: 'Human‑robot collaboration',
    desc: 'Safe, adaptive collaboration between industrial robots and operators.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Recent initiatives</h2>
          <p className="mt-4 text-blue-200/85">
            A selection of ongoing programs and collaborations that reflect our mission.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:from-white/10 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-blue-200/70" />
              </div>
              <p className="mt-2 text-sm text-blue-200/85">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
