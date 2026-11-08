import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Namash', href: '#why-us' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-gradient-to-b from-[#041d15]/85 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — Clean text without icon */}
          <a href="#home" className="group flex items-center flex-shrink-0">
            <span
              className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-slate-900 group-hover:text-[#65a30d]' : 'text-white group-hover:text-[#a3e635]'
              }`}
            >
              Namash Men's Hostel
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#84cc16] ${
                  scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#74be12] text-slate-950 text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-md shadow-lime-500/25 hover:scale-[1.02]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile / Tablet Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#65a30d] hover:bg-lime-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#84cc16] hover:bg-[#74be12] text-slate-950 text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-lime-500/25"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
