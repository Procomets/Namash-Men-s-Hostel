import { Star, Quote, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    name: 'Karthik Raja',
    role: 'Senior Software Engineer at Cognizant',
    room: '2 Sharing AC Room',
    duration: 'Staying for 14 months',
    rating: 5,
    quote:
      'The EB sub-metering calculation here is completely transparent and fair. In my previous hostel, bills were arbitrary. At Namash, you pay strictly for what you use. The 100 Mbps Wi-Fi is reliable for my evening WFH calls.',
  },
  {
    name: 'Vignesh Sundaram',
    role: 'Fintech Product Analyst',
    room: '3 Sharing AC Room',
    duration: 'Staying for 9 months',
    rating: 5,
    quote:
      'Finding a peaceful, hygienic PG in Chennai was tough until I moved into Namash. Rooms are cleaned every single day, restrooms are spotless, and the hostel environment is quiet and respectful.',
  },
  {
    name: 'Mohammed Farhan',
    role: 'MBA Student at Loyola College',
    room: '4 Sharing Non-AC Room',
    duration: 'Staying for 11 months',
    rating: 5,
    quote:
      'Affordable fees without cutting corners. Commercial RO water is available on every floor, power backup kicks in immediately, and the bus stop is just a 2-minute walk away. Highly recommended!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafbfa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="text-[#65a30d]">Residents Say</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg">
            Hear from working professionals and students who call Namash Men's Hostel their home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-lime-50 text-[#65a30d] flex items-center justify-center">
                    <Quote size={16} className="rotate-180" />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <CheckCircle size={14} className="text-[#84cc16]" />
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[11px] font-semibold text-[#65a30d] mt-1">
                    {item.room} • {item.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

