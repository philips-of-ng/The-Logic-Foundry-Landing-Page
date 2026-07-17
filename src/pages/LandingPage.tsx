import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import GatewaySection from '../components/GatewaySection'
import WhoItsForSection from '../components/WhoItsForSection'
import CurriculumSection from '../components/CurriculumSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='bg-[#0A0A0A]'>
      <Navbar />
      <HeroSection />
      <GatewaySection />
      <WhoItsForSection />
      <CurriculumSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default LandingPage