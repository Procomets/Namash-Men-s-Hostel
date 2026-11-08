function WhatsAppIcon({ className = 'w-7 h-7 sm:w-8 sm:h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  )
}

function PhoneIcon({ className = 'w-6 h-6 sm:w-7 sm:h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3.5 items-center">
      {/* Phone Call Button — Round & Dead Centered */}
      <a
        href="tel:+919150501813"
        aria-label="Call Namash Men's Hostel"
        title="Call +91 91505 01813"
        className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-b from-[#2ef275] via-[#24dd69] to-[#1ca34e] flex items-center justify-center shadow-xl shadow-green-600/35 hover:scale-110 active:scale-95 transition-all text-white border border-white/20 cursor-pointer"
      >
        <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
      </a>

      {/* WhatsApp Button — Round & Perfectly Aligned */}
      <a
        href="https://wa.me/919150501813?text=Hi%2C%20I%27m%20interested%20in%20staying%20at%20Namash%20Men%27s%20Hostel.%20Could%20you%20share%20the%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 91505 01813)"
        className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-b from-[#2ef275] via-[#24dd69] to-[#1ca34e] flex items-center justify-center shadow-xl shadow-green-600/35 hover:scale-110 active:scale-95 transition-all text-white border border-white/20 cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
      </a>
    </div>
  )
}

