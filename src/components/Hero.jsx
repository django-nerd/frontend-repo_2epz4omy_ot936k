import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-blue-100/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            Advanced Research & Innovation Hub
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Engineering the future through science and technology
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            We connect academia, industry, and communities to solve complex challenges in materials, energy, and smart systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#capabilities" className="rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/20">
              Explore capabilities
            </a>
            <a href="#contact" className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 backdrop-blur hover:bg-white/10">
              Partner with us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  )
}
