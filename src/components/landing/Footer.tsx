import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 py-14 lg:py-16 text-center flex flex-col items-center justify-center">
        
        {/* Brand Name — Clean text without any icon */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
          Namash Men's Hostel
        </h3>

        {/* Short Tagline */}
        <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed mb-8">
          Premium, safe, and hygienic men's accommodation in Chennai for working professionals and students.
        </p>

         

        {/* Centered Contact Details */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400 mb-4">
          <a href="tel:+919150501813" className="hover:text-[#a3e635] transition-colors font-medium">
            +91 91505 01813
          </a>
          <span className="text-slate-600">•</span>
          <a href="mailto:info@namashhostel.com" className="hover:text-[#a3e635] transition-colors font-medium">
            info@namashhostel.com
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="https://maps.app.goo.gl/4xmpUyoMBEBV5fLG6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a3e635] transition-colors font-medium"
          >
            Chennai, Tamil Nadu, India
          </a>
        </div>

        {/* Office Hours */}
        <p className="text-xs text-slate-500 mb-10">
          Office Hours: Mon — Sat: 9:00 AM — 9:00 PM • Sunday: 10:00 AM — 6:00 PM
        </p>

        {/* Bottom Line Divider */}
        <div className="w-full max-w-xl h-px bg-white/10 mb-8" />

        {/* Copyright & Admin Link — Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Namash Men's Hostel. All rights reserved.</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#a3e635] transition-colors px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <Lock size={12} />
            <span>Admin Login</span>
          </Link>
        </div>

      </div>
    </footer>
  )
}
