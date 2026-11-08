import { Check, Star, ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafbfa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Essential living features for modern hostel comfort
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Designed specifically for working IT professionals and students who value a peaceful environment, hygienic amenities, and total transparency.
          </p>
        </div>

        {/* 3 Color-Themed Cards (Exact match of Biztop theme: White / Vibrant Lime / Deep Forest) */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Card 1: White Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Safety & 24/7 Security
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Biometric access, 24/7 CCTV surveillance across corridors, and dedicated hostel warden ensuring total resident safety and peace of mind.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1 text-[#65a30d] font-semibold text-sm">
              <span>Secure Environment</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Card 2: Vibrant Green Card (Biztop Center Card) */}
          <div className="bg-gradient-to-br from-[#a3e635] via-[#84cc16] to-[#65a30d] text-slate-950 rounded-3xl p-8 sm:p-9 shadow-lg shadow-lime-500/20 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                Fair EB Sub-Metering
              </h3>
              <p className="text-slate-900/90 text-sm font-medium leading-relaxed">
                Every room is equipped with an individual digital meter. You only pay for exact interval units consumed, calculated fairly using our ERP engine.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-950/15 flex items-center gap-1 font-bold text-sm text-slate-950">
              <span>Zero Overcharging</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Card 3: Deep Forest Green Card (Biztop Right Card) */}
          <div className="bg-[#093326] text-white rounded-3xl p-8 sm:p-9 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Productive Community
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Calm, respectful atmosphere suited for software engineers, graduate students, and competitive exam aspirants seeking distraction-free living.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-1 text-[#a3e635] font-semibold text-sm">
              <span>Verified Residents</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Split Section: Images on Left + Narrative on Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Montage & Metric Badges */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {/* Top Main Image */}
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg h-64 sm:h-72">
              <img
                src="/images/gallery-lockers-room.jpg"
                alt="Cozy well-ventilated hostel bedroom with safety lockers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Stat Card 1: Green Stat Badge */}
            <div className="bg-[#a3e635] rounded-3xl p-6 flex flex-col justify-center shadow-md">
              <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center mb-3">
                <Check size={20} strokeWidth={3} />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950">500+</div>
              <div className="text-xs font-bold text-slate-900 mt-1">Happy Residents Served</div>
            </div>

            {/* Stat Card 2: Rating Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-center">
              <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                4.9<span className="text-sm text-slate-400 font-normal"> / 5.0</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">Avg. Resident Google Rating</div>
            </div>
          </div>

          {/* Right: Narrative & Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Complete Solution for Men's Hostel Excellence in Chennai
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              At Namash Men’s Hostel, we bridge the gap between quality accommodation and reasonable pricing. We maintain strict hygiene protocols, high-speed fiber internet, and professional hostel management so you feel at home every day.
            </p>

            {/* Bulleted Perks */}
            <div className="space-y-3 pt-2">
              {[
                'Prime Chennai location with instant access to transit & IT parks',
                'Furnished rooms with individual wooden cupboards and sturdy cot-beds',
                'Commercial RO filtered drinking water available on all floors',
                'Automated power backup for lights, fans, and study spaces',
                'Transparent billing and WhatsApp receipts for peace of mind',
              ].map((perk) => (
                <div key={perk} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime-100 text-[#4d7c0f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#74be12] text-slate-950 font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md shadow-lime-500/25"
              >
                Inquire for Availability
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
