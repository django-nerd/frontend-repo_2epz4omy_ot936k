import { useState } from 'react'
import { Menu, X, FlaskConical, Building2, Atom, Phone } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-blue-500/30 blur-lg" />
              <div className="relative rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 p-2 shadow-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-white font-semibold tracking-tight leading-none">
                INCESA
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-blue-200/70">
                Advanced Research Infrastructure
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-blue-100/90 hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
