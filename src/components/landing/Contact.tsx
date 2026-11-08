import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi, I'm ${formData.name}. I'm interested in ${formData.roomType || 'hostel accommodation'}. ${formData.message}`.trim()
    const whatsappUrl = `https://wa.me/919150501813?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to Move In? Get in Touch
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Send us your enquiry and we'll get back to you within hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: 'Phone', value: '+91 91505 01813', href: 'tel:+919150501813' },
              { icon: Mail, label: 'Email', value: 'info@namashhostel.com', href: 'mailto:info@namashhostel.com' },
              { icon: MapPin, label: 'Address', value: 'Chennai, Tamil Nadu, India', href: 'https://maps.app.goo.gl/4xmpUyoMBEBV5fLG6' },
              { icon: Clock, label: 'Office Hours', value: '9:00 AM — 9:00 PM', href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100">
                <div className="w-10 h-10 bg-lime-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#65a30d]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-[#65a30d] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-slate-700">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all"
                    placeholder="+91 91505 01813"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Preferred Room Type</label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all text-slate-700"
                >
                  <option value="">Select a room type</option>
                  <option value="2 Sharing AC">2 Sharing — AC</option>
                  <option value="3 Sharing AC">3 Sharing — AC</option>
                  <option value="4 Sharing Non-AC">4 Sharing — Non-AC</option>
                  <option value="6 Sharing Non-AC">6 Sharing — Non-AC</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-[#84cc16] transition-all resize-none"
                  placeholder="Any specific requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#84cc16] hover:bg-[#74be12] text-slate-950 font-bold py-3.5 rounded-full transition-all text-sm shadow-lg shadow-lime-500/25 cursor-pointer"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
              <p className="text-xs text-slate-400 text-center">
                Your enquiry will be sent directly to our WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

