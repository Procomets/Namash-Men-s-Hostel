import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is included in the monthly room fee at Namash Men’s Hostel?',
    answer:
      'Your monthly fee covers your furnished bed, high-speed fiber Wi-Fi (100 Mbps), daily housekeeping, 24/7 security with CCTV surveillance, continuous RO drinking water supply, and automatic power backup. There are zero hidden maintenance charges.',
  },
  {
    question: 'How is the electricity bill (EB) calculated?',
    answer:
      'Every room has an independent digital EB sub-meter. EB is calculated using a fair interval checkpoint method: whenever a resident joins or leaves, an intermediate reading is taken so you only pay for the exact units consumed during your occupancy days, preventing unfair bill sharing.',
  },
  {
    question: 'Are meals provided at the hostel?',
    answer:
      'Yes, we offer wholesome, hygienic home-style breakfast and dinner plans. Residents can choose to include meal plans or opt for room-only accommodation based on their daily routine.',
  },
  {
    question: 'What is the security deposit and refund policy?',
    answer:
      'We require a standard, transparent security deposit upon joining. The deposit is fully refundable on checkout following standard 30-day notice with zero deductions other than any pending room rent or EB balance.',
  },
  {
    question: 'How do I book a bed or schedule a physical visit?',
    answer:
      'You can book directly via WhatsApp or call our management desk at +91 91505 01813. Walk-in visits are welcome every day between 9:00 AM and 9:00 PM without any prior appointment.',
  },
  {
    question: 'What are the gate timings and visitor policies?',
    answer:
      'To accommodate IT professionals and shift workers, we provide round-the-clock secure biometric entry. Outside guests are permitted in designated visitor areas to respect the privacy and safety of all residents.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#65a30d]">Questions</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg">
            Everything you need to know about staying at Namash Men's Hostel
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 hover:border-lime-400"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer gap-4 transition-colors hover:bg-slate-50/60"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 text-[#65a30d] bg-lime-50'
                        : 'text-slate-400 bg-slate-50'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-[#fbfdfb]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
