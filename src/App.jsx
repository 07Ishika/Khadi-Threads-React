

import HeroSection from './Components/Herosec/Herosec.jsx'
import Navbar from './Components/Navbar'
import WhyKhadi from './Components/WhyKhadi.jsx'
import FeaturedProducts from './Components/Featuredproduct.jsx'
import OurStory from './Components/OurStory.jsx'
import SubscribeSection from './Components/SubscribeSection.jsx'
import Footer from './Components/Footer'
import './App.css'

function App() {


  return (
    <>
     <div className="relative">
      <Navbar />
      <HeroSection />
      <WhyKhadi/>
      <FeaturedProducts/>
      <OurStory/>
      <SubscribeSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
