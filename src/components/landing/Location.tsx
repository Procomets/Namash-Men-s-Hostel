import { useState } from 'react'
import { ExternalLink, Navigation } from 'lucide-react'

interface LandmarkLocation {
  id: string
  name: string
  distance: string
  importance: string
  time: string
  query: string
}

const locations: LandmarkLocation[] = [
  {
    id: 'hostel',
    name: "Namash Men's Hostel",
    distance: '0 m',
    importance: 'Home Base',
    time: 'Central Location',
    query: "Namash Men's Hostel, Chennai",
  },
  {
    id: 'bristol',
    name: 'Bristol IT Park',
    distance: '100 m',
    importance: 'Very close',
    time: '1 min walk',
    query: 'Bristol IT Park, Ekkattuthangal, Chennai',
  },
  {
    id: 'olympia',
    name: 'Olympia Technology Park',
    distance: '0.3–1 km',
    importance: 'Major IT hub',
    time: '5 min walk',
    query: 'Olympia Technology Park, Guindy, Chennai',
  },
  {
    id: 'metro',
    name: 'Ekkattuthangal Metro Station',
    distance: '1.1 km',
    importance: 'Metro connectivity',
    time: '3 min drive',
    query: 'Ekkattuthangal Metro Station, Chennai',
  },
  {
    id: 'guindy',
    name: 'Guindy Railway Station',
    distance: '2.3 km',
    importance: 'Suburban railway',
    time: '7 min drive',
    query: 'Guindy Railway Station, Chennai',
  },
  {
    id: 'st-thomas',
    name: 'St. Thomas Hospital',
    distance: '1.3 km',
    importance: 'Healthcare',
    time: '4 min drive',
    query: 'St Thomas Hospital, Defence Colony, Chennai',
  },
  {
    id: 'chandra',
    name: 'Chandra Metro Mall',
    distance: '2.7 km',
    importance: 'Shopping & entertainment',
    time: '8 min drive',
    query: 'Chandra Metro Mall, Arcot Road, Chennai',
  },
  {
    id: 'fortis',
    name: 'Fortis Hospital, Vadapalani',
    distance: '2.8 km',
    importance: 'Healthcare',
    time: '9 min drive',
    query: 'Fortis Hospital, Vadapalani, Chennai',
  },
  {
    id: 'phoenix',
    name: 'Phoenix Marketcity',
    distance: '4.1 km',
    importance: 'Shopping & entertainment',
    time: '12 min drive',
    query: 'Phoenix Marketcity, Velachery, Chennai',
  },
]

export default function Location() {
  const [selectedId, setSelectedId] = useState<string>('hostel')

  const active = locations.find((l) => l.id === selectedId) || locations[0]

  const mapUrl =
    active.id === 'hostel'
      ? 'https://www.google.com/maps?q=Namash+Men%27s+Hostel+Chennai&output=embed'
      : `https://www.google.com/maps?q=${encodeURIComponent(active.query)}&output=embed`

  const externalMapLink =
    active.id === 'hostel'
      ? 'https://maps.app.goo.gl/4xmpUyoMBEBV5fLG6'
      : `https://www.google.com/maps/dir/?api=1&origin=Namash+Men%27s+Hostel+Chennai&destination=${encodeURIComponent(
          active.query
        )}`

  return (
    <section id="location" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conveniently Located in Chennai
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            Click any destination below to locate it on the map or get direct navigation.
          </p>
        </div>

        {/* 2-Column Split: Clean Text Links Beside the Map */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clean Text List with Navigation Links (No Boxes) */}
          <div className="lg:col-span-5">
            <div className="border-b border-slate-200 pb-3 mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Nearby Key Locations
              </span>
              <span className="text-xs text-slate-400">Distance</span>
            </div>

            <div className="divide-y divide-slate-100">
              {locations.map((item) => {
                const isSelected = selectedId === item.id
                const isHostel = item.id === 'hostel'

                const navLink =
                  isHostel
                    ? 'https://maps.app.goo.gl/4xmpUyoMBEBV5fLG6'
                    : `https://www.google.com/maps/dir/?api=1&origin=Namash+Men%27s+Hostel+Chennai&destination=${encodeURIComponent(
                        item.query
                      )}`

                return (
                  <div
                    key={item.id}
                    className="py-3 flex items-center justify-between gap-4 group transition-colors"
                  >
                    {/* Left: Location Name (click to focus map) */}
                    <button
                      onClick={() => setSelectedId(item.id)}
                      className="text-left flex items-start gap-2.5 cursor-pointer flex-1 min-w-0"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#84cc16] ring-4 ring-lime-200'
                            : 'bg-slate-300 group-hover:bg-[#84cc16]'
                        }`}
                      />
                      <div className="min-w-0">
                        <div
                          className={`text-sm tracking-tight transition-colors truncate ${
                            isSelected
                              ? 'text-[#4d7c0f] font-bold'
                              : 'text-slate-800 font-medium group-hover:text-[#65a30d]'
                          }`}
                        >
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {item.importance} • {item.time}
                        </div>
                      </div>
                    </button>

                    {/* Right: Distance & Direct Navigation Link */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs font-bold text-slate-600">
                        {item.distance}
                      </span>
                      <a
                        href={navLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#65a30d] hover:text-[#4d7c0f] hover:underline inline-flex items-center gap-1"
                        title={`Navigate to ${item.name}`}
                      >
                        <span>Navigate</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Navigation size={13} className="text-[#65a30d] flex-shrink-0" />
              <span>Namash Men's Hostel is just 100 meters from Bristol IT Park.</span>
            </div>
          </div>

          {/* Right Column: Actual Google Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 h-[500px] lg:h-[560px]">

              {/* Top-Right Badge: Showing active location */}
              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Viewing on Map
                  </div>
                  <div className="text-xs font-bold text-slate-900 truncate max-w-[200px]">
                    {active.name}
                  </div>
                  {active.id !== 'hostel' && (
                    <div className="text-[11px] font-bold text-[#65a30d]">
                      {active.distance} from hostel
                    </div>
                  )}
                </div>
              </div>

              {/* Actual Google Map iframe */}
              <iframe
                key={mapUrl}
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Map - ${active.name}`}
                className="w-full h-full min-h-[500px] lg:min-h-[560px]"
              />

              {/* Bottom Subtle Bar */}
              <div className="absolute bottom-4 inset-x-4 z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md border border-slate-200 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {active.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {active.id === 'hostel'
                        ? 'Chennai, Tamil Nadu'
                        : `${active.importance} • ${active.distance} (${active.time})`}
                    </div>
                  </div>
                  <a
                    href={externalMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-950 bg-[#84cc16] hover:bg-[#74be12] px-3.5 py-1.5 rounded-lg shadow-xs shadow-lime-500/25 transition-all flex-shrink-0"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
