export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/80 text-sm">© {new Date().getFullYear()} INCESA — All rights reserved.</div>
        <div className="text-xs text-blue-200/70">University of Craiova • Research, Development and Innovation Infrastructure in Applied Sciences</div>
      </div>
    </footer>
  )
}
