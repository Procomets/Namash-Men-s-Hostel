import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import About from '../components/landing/About'
import WhyNamash from '../components/landing/WhyNamash'
import Facilities from '../components/landing/Facilities'
import Gallery from '../components/landing/Gallery'
import Testimonials from '../components/landing/Testimonials'
import FAQ from '../components/landing/FAQ'
import Location from '../components/landing/Location'
import Contact from '../components/landing/Contact'
import Footer from '../components/landing/Footer'
import WhatsAppButton from '../components/landing/WhatsAppButton'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#84cc16] selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <WhyNamash />
      <Facilities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
