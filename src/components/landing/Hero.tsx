import { useState } from 'react'
import {
  Bed,
  Utensils,
  Wifi,
  Shield,
  Sparkles,
  Zap,
  Lock,
  Star,
  CheckCircle2,
} from 'lucide-react'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Trigger direct WhatsApp enquiry with filled details
    const text = `Hello Namash Men's Hostel,\n\nI would like to check room availability:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'Not provided'}\n• Room Preference: ${formData.roomType || 'Immediate Availability'}`
    const whatsappUrl = `https://wa.me/919150501813?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#06291e] pt-28 sm:pt-32 pb-0">
      
      {/* Background Architectural Exterior Image with Green-Based Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hostel-building.jpg"
          alt="Namash Men's Hostel Building Exterior"
          className="w-full h-full object-cover object-center scale-105 opacity-75"
        />
        {/* Rich green-based atmosphere overlay with reduced opacity so the building shows through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05281e]/80 via-[#0a3e2e]/70 to-[#062d21]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041d15]/85 via-transparent to-[#042017]/35" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full my-auto pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines + Feature Chips */}
          <div className="lg:col-span-7 space-y-5">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pg accommodation chennai
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 tracking-tight">
              Comfortable and affordable living spaces
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Discover top-rated paying guest accommodations across Chennai with zero brokerage and modern amenities.
            </p>

            {/* Translucent Dark Pill Chips (Exact Match of Reference Image) */}
            <div className="space-y-2.5 pt-3">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Bed size={14} className="text-slate-300" />
                  <span>Fully Furnished</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Utensils size={14} className="text-slate-300" />
                  <span>Food Included</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Wifi size={14} className="text-slate-300" />
                  <span>WiFi</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Shield size={14} className="text-slate-300" />
                  <span>24/7 Security</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Sparkles size={14} className="text-slate-300" />
                  <span>Daily Housekeeping</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors">
                  <Zap size={14} className="text-slate-300" />
                  <span>Power Backup</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead / Free Match Form Card (Exact Match of Reference Image) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full mx-auto lg:ml-auto">
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
                Get Your Free PG Match
              </h3>

              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-lime-100 text-[#4d7c0f] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-500">
                    We have redirected your request to our admissions desk on WhatsApp. We'll assist you immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#65a30d] hover:text-[#4d7c0f] hover:underline pt-2 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all cursor-pointer"
                    >
                      <option value="">Select Locality / Sharing</option>
                      <option value="Ekkattuthangal / Guindy (2 Sharing AC)">Ekkattuthangal — 2 Sharing AC</option>
                      <option value="Ekkattuthangal / Guindy (3 Sharing AC)">Ekkattuthangal — 3 Sharing AC</option>
                      <option value="Ekkattuthangal / Guindy (4 Sharing Non-AC)">Ekkattuthangal — 4 Sharing Non-AC</option>
                      <option value="Ekkattuthangal / Guindy (6 Sharing Non-AC)">Ekkattuthangal — 6 Sharing Non-AC</option>
                    </select>
                  </div>

                  <div className="pt-1.5">
                    <button
                      type="submit"
                      className="w-full bg-[#84cc16] hover:bg-[#74be12] text-slate-950 font-bold py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-lime-500/25 cursor-pointer"
                    >
                      Check Rooms Near Me
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <Lock size={12} className="text-amber-500" />
                    <span>Your data is 100% safe with us</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Translucent Glass Stat Bar (Exact Match of Reference Image) */}
      <div className="relative z-10 w-full bg-[#041d15]/80 backdrop-blur-md border-t border-white/10 py-5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/15 text-center items-center">
            
            {/* Stat 1: Google Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2">
              <div className="flex items-center gap-1 text-amber-400">
                <Star size={18} fill="currentColor" />
                <span className="text-xl sm:text-2xl font-black text-white">4.9</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                GOOGLE RATING
              </span>
            </div>

            {/* Stat 2: Happy Residents */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2">
              <span className="text-xl sm:text-2xl font-black text-white">500+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                HAPPY RESIDENTS
              </span>
            </div>

            {/* Stat 3: Beds */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2">
              <span className="text-xl sm:text-2xl font-black text-white">135+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                BEDS
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
