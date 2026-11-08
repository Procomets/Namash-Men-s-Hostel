import {
  Wifi,
  ShieldCheck,
  UtensilsCrossed,
  Droplets,
  Zap,
  Lock,
  WashingMachine,
  Clock,
} from 'lucide-react'

const facilities = [
  { icon: Wifi, title: 'High-Speed Wi-Fi', description: 'Dedicated broadband connection for seamless browsing and work.' },
  { icon: ShieldCheck, title: 'CCTV Security', description: '24/7 surveillance cameras and secure entry for resident safety.' },
  { icon: UtensilsCrossed, title: 'Hygienic Meals', description: 'Optional home-style breakfast and dinner prepared fresh daily.' },
  { icon: Droplets, title: 'RO Drinking Water', description: 'Purified RO water available on every floor, round the clock.' },
  { icon: Zap, title: 'Power Backup', description: 'Uninterrupted power supply with automatic generator backup.' },
  { icon: Lock, title: 'Safety Lockers', description: 'Separate individual safety lockers for all residents to secure valuables.' },
  { icon: WashingMachine, title: 'Laundry Service', description: 'Washing machine access and ironing facilities for residents.' },
  { icon: Clock, title: 'Flexible Timings', description: 'No strict curfew — designed for professionals with varied schedules.' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Everything You Need, All Under One Roof
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Modern amenities designed to make your stay comfortable and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="group text-center p-6 rounded-2xl hover:bg-lime-50/70 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-lime-50 group-hover:bg-lime-100 rounded-2xl flex items-center justify-center transition-colors">
                <item.icon size={24} className="text-[#65a30d]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed hidden sm:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

