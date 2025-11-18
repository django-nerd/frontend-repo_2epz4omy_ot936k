import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Facilities from './components/Facilities'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_100%_100%,rgba(217,70,239,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <section id="about" className="bg-slate-950 py-24">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About INCESA</h2>
              <p className="mt-4 text-blue-200/85">
                INCESA is the Integrated Center for Research, Development and Innovation in Applied Sciences at the University of Craiova. We act as a bridge between academia and industry, enabling cross‑disciplinary research, technology transfer and high‑impact projects.
              </p>
              <p className="mt-3 text-blue-200/80">
                Our mission is to accelerate regional development and competitiveness by offering access to cutting‑edge facilities, expertise and collaborative programs across materials, energy, mechatronics and digital innovation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-fuchsia-600 blur-lg opacity-30" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <dl className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-blue-200/70">Labs</dt>
                    <dd className="mt-1 text-3xl font-bold text-white">10+</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-blue-200/70">Projects</dt>
                    <dd className="mt-1 text-3xl font-bold text-white">50+</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-blue-200/70">Partners</dt>
                    <dd className="mt-1 text-3xl font-bold text-white">30+</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-blue-200/70">Years</dt>
                    <dd className="mt-1 text-3xl font-bold text-white">10</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <Capabilities />
        <Facilities />
        <Projects />

        <section id="contact" className="relative bg-slate-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
              <p className="mt-4 text-blue-200/85">Get in touch to discuss collaboration, services or site visits.</p>
            </div>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Your name" />
              <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Email" />
              <input className="md:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Subject" />
              <textarea rows="5" className="md:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Message" />
              <div>
                <button type="button" className="rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20">Send message</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
