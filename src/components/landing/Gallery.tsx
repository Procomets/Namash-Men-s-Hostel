import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/images/gallery-ac-room.jpg',
    alt: 'Executive 2 sharing AC bedroom at Namash Men\'s Hostel',
    title: 'Executive AC Room',
  },
  {
    src: '/images/gallery-lockers-room.jpg',
    alt: 'Spacious sharing bedroom with separate personal safety lockers',
    title: 'Room with Safety Lockers',
  },
  {
    src: '/images/gallery-corridor.jpg',
    alt: 'Hygienic, well-lit corridors and clean passage',
    title: 'Clean & Well-Lit Corridors',
  },
  {
    src: '/images/gallery-washbasin-room.jpg',
    alt: 'Furnished bedroom with attached washbasin',
    title: 'Room with Attached Washbasin',
  },
  {
    src: '/images/gallery-bed-ac.jpg',
    alt: 'Comfortable cot beds and air conditioned living space',
    title: 'Comfortable AC Bedroom',
  },
  {
    src: '/images/hostel-building.jpg',
    alt: 'Namash Men\'s Hostel building facade and entrance gate',
    title: 'Hostel Facade & Premises',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null))

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Take a Look Inside
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Explore our well-maintained rooms, common areas, and amenities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-semibold">
                  {image.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            aria-label="Close photo"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-4 sm:right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
          <div className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center">
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-3 text-white/80 text-sm font-medium">
              {images[lightbox].title} ({lightbox + 1} / {images.length})
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
