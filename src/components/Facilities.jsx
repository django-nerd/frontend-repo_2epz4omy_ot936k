import { Building2, Cog, Satellite, Beaker } from 'lucide-react'

const facilities = [
  {
    title: 'Materials & Surface Lab',
    details: 'Thin film deposition, microscopy, spectroscopy and advanced characterization.',
  },
  {
    title: 'Energy & Environment Lab',
    details: 'Testing platforms for energy systems, environmental monitoring and sustainability.',
  },
  {
    title: 'Mechatronics & Robotics Lab',
    details: 'Autonomous systems, industrial robotics and control systems integration.',
  },
  {
    title: 'Digital Innovation Hub',
    details: 'AI/ML, simulation environments, data engineering and high‑performance computing.',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Facilities</h2>
            <p className="mt-4 text-blue-200/85 max-w-xl">
              From advanced materials to cyber‑physical systems, our infrastructure accelerates discovery and technology transfer.
            </p>

            <div className="mt-8 space-y-4">
              {facilities.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 mt-2" />
                    <div>
                      <h3 className="text-white font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-blue-200/85">{f.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-fuchsia-600/10 p-6 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <img src="/facility.jpg" alt="INCESA Facilities" className="w-full rounded-xl border border-white/10" />
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-blue-200/80">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">ISO compliant protocols</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">Industry partnerships</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">EU funded projects</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">Open to collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
