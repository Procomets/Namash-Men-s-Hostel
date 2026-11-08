import { CheckCircle2, XCircle } from 'lucide-react'

const namashPerks = [
  { title: 'Verified Rooms', desc: 'Safe, hygienic, and regularly inspected living spaces' },
  { title: 'Transparent EB Metering', desc: 'Separate room meter; fair interval-based billing without overcharging' },
  { title: 'Zero Brokerage', desc: 'Direct owner management with zero broker commission or hidden fees' },
  { title: 'High-Speed Wi-Fi', desc: '100 Mbps uninterrupted dedicated fiber connectivity for work & study' },
  { title: 'Daily Cleaning', desc: 'Routine spotless upkeep of rooms, corridors, and sanitised restrooms' },
  { title: 'Responsive Support', desc: 'On-site manager and transparent ERP receipts delivered via WhatsApp' },
]

const otherPGCons = [
  { title: 'Unverified PGs', desc: 'Inconsistent hygiene, cramped rooms, and substandard facilities' },
  { title: 'Arbitrary EB Bills', desc: 'Unfair end-of-month division burdening residents who joined late' },
  { title: 'Broker Fees & Hidden Costs', desc: 'Unexpected maintenance surcharges and disputed security deposits' },
  { title: 'Slow Internet', desc: 'Unreliable mobile hotspots or throttled speeds disrupting daily work' },
  { title: 'Irregular Cleaning', desc: 'Neglected common spaces and dirty shared restrooms' },
  { title: 'Absentee Management', desc: 'Delayed response to complaints and unaddressed maintenance issues' },
]

export default function WhyNamash() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why <span className="text-[#65a30d]">Namash?</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg">
            Why Namash is the preferred men's accommodation in Chennai
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Namash Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-lime-500/30 shadow-xl shadow-lime-500/10 flex flex-col justify-between">
            <div>
              <div className="text-center pb-8 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4d7c0f] bg-lime-50 border border-lime-200 px-3.5 py-1.5 rounded-full">
                  Our Standard
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                  Namash Men's Hostel
                </h3>
              </div>

              <div className="space-y-5 pt-8">
                {namashPerks.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <CheckCircle2
                      size={22}
                      className="text-[#84cc16] flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.title}
                      </span>{' '}
                      <span className="text-slate-500 text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full flex items-center justify-center py-3.5 bg-[#84cc16] hover:bg-[#74be12] text-slate-950 font-bold rounded-full text-sm transition-all shadow-md shadow-lime-500/25"
              >
                Experience the Difference
              </a>
            </div>
          </div>

          {/* Other PGs Card */}
          <div className="bg-[#fcfdfc] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center pb-8 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-3.5 py-1.5 rounded-full">
                  Traditional Market
                </span>
                <h3 className="text-2xl font-extrabold text-slate-700 mt-3">
                  Other Local PGs
                </h3>
              </div>

              <div className="space-y-5 pt-8">
                {otherPGCons.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <XCircle
                      size={22}
                      className="text-rose-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="font-bold text-slate-800 text-sm sm:text-base">
                        {item.title}
                      </span>{' '}
                      <span className="text-slate-500 text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Avoid unnecessary friction and unpredictable expenses with our managed stay.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

