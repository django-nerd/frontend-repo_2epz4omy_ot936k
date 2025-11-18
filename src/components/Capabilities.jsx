import { Cpu, Microscope, Sparkles, FlaskConical, Shield, CircuitBoard } from 'lucide-react'

const items = [
  {
    icon: Microscope,
    title: 'Advanced Materials',
    desc: 'Characterization, thin films, coatings, and nanostructures with state-of-the-art instrumentation.',
  },
  {
    icon: Cpu,
    title: 'Smart Systems',
    desc: 'Embedded systems, IoT, robotics, and cyber-physical platforms for industry and academia.',
  },
  {
    icon: FlaskConical,
    title: 'Applied Research',
    desc: 'Collaborative research projects, prototyping, validation and technology transfer.',
  },
  {
    icon: CircuitBoard,
    title: 'Digital Innovation',
    desc: 'AI/ML, data platforms, simulation and digital twins for complex systems.',
  },
  {
    icon: Shield,
    title: 'Quality & Compliance',
    desc: 'Accredited procedures, rigorous standards, and safety-first operations.',
  },
  {
    icon: Sparkles,
    title: 'Education & Outreach',
    desc: 'Training programs, workshops and community engagement across STEM fields.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(600px_300px_at_80%_100%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
          <p className="mt-4 text-blue-200/85">
            Built from the ground up to support cross‑disciplinary research and real‑world impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-600/30 to-fuchsia-600/30 p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/85">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
