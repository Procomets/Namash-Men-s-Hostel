import { Snowflake, Fan, Check, ArrowRight } from 'lucide-react'

const rooms = [
  {
    type: '2 Sharing',
    ac: true,
    price: '₹8,500',
    period: '/month/person',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=700&q=80',
    features: ['Split Air Conditioner', 'Attached Restroom', 'Solid Wood Cot & Mattress', 'Dedicated Study Desk & Cupboard'],
    highlight: true,
    tag: 'Most Popular',
  },
  {
    type: '3 Sharing',
    ac: true,
    price: '₹6,500',
    period: '/month/person',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    features: ['Air Conditioned', 'Spacious Room Layout', 'Individual Lockable Cupboard', 'Power Backup Included'],
    highlight: false,
    tag: 'Spacious',
  },
  {
    type: '4 Sharing',
    ac: false,
    price: '₹5,000',
    period: '/month/person',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
    features: ['High-Speed Ceiling Fans', 'Well Ventilated Windows', 'Personal Storage Locker', 'Daily Common Cleaning'],
    highlight: false,
    tag: 'Value for Money',
  },
  {
    type: '6 Sharing',
    ac: false,
    price: '₹3,500',
    period: '/month/person',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=700&q=80',
    features: ['High-Speed Ceiling Fans', 'Comfortable Sturdy Beds', 'Shared Wardrobe Space', 'Ideal for Students & Jobseekers'],
    highlight: false,
    tag: 'Budget Friendly',
  },
]

export default function RoomTypes() {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing & Flexible Sharing
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Choose the room configuration that fits your comfort level and budget. All plans include high-speed Wi-Fi, RO water, and daily housekeeping.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.type}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                room.highlight
                  ? 'border-2 border-lime-500 shadow-lg shadow-lime-500/10 bg-slate-950 text-white'
                  : 'border border-slate-200/90 bg-white text-slate-900 hover:border-lime-300'
              }`}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={room.image}
                  alt={`${room.type} room at Namash Men's Hostel`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md ${
                    room.ac
                      ? 'bg-blue-600/90 text-white'
                      : 'bg-slate-900/80 text-white'
                  }`}>
                    {room.ac ? 'AC Room' : 'Non-AC'}
                  </span>
                </div>

                {room.tag && (
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${
                      room.highlight
                        ? 'bg-[#a3e635] text-slate-950'
                        : 'bg-white/90 text-slate-800 backdrop-blur-md'
                    }`}>
                      {room.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight">
                      {room.type}
                    </h3>
                    <div className={`p-1.5 rounded-lg ${room.highlight ? 'bg-white/10 text-lime-400' : 'bg-slate-100 text-slate-600'}`}>
                      {room.ac ? <Snowflake size={16} /> : <Fan size={16} />}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight">
                      {room.price}
                    </span>
                    <span className={`text-xs ${room.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {room.period}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="mt-6 space-y-2.5">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          room.highlight ? 'bg-lime-500/20 text-lime-400' : 'bg-lime-100 text-lime-700'
                        }`}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className={room.highlight ? 'text-slate-300' : 'text-slate-600'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100/10">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      room.highlight
                        ? 'bg-lime-500 hover:bg-lime-400 text-slate-950 shadow-md shadow-lime-500/20'
                        : 'bg-slate-100 hover:bg-lime-600 hover:text-white text-slate-800'
                    }`}
                  >
                    Check Availability
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on EB calculation */}
        <div className="mt-10 bg-lime-50/70 border border-lime-200/60 rounded-2xl p-4 sm:p-5 max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-lime-900 font-medium">
            💡 <strong>Transparent EB Calculation:</strong> Electricity is sub-metered per room and fairly apportioned according to each resident's exact stay duration.
          </p>
        </div>

      </div>
    </section>
  )
}
