import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero/Hero2.jsx'
import AboutUs from '../components/OurStory/AboutUs'
import OurBrands from '../components/OurBrands/OurBrands'
import BoutiqueLocator from '../components/Boutiques/BoutiqueLocator.jsx'
import OurBrandsHero from '../components/OurBrands/OurBrandsHero'
import ParticleCanvas from '../components/ParticleCanvas.jsx' 
import Crazy from '../components/Crazy/Crazy.jsx' 
import StoryTimeline from '../components/Story/StoryTimeline.jsx'
import D from '../components/D/D.jsx'
import LocationsTest from '../components/D/Loctionstest.jsx'
import Hoplot from './assets/hublot1.jpg'
// import chopard from './assets/Chopard.jpg'
import Azza from './assets/Azza.webp'
import Saint from './assets/Saint.jpg'
import GC3 from './assets/gr.jpg'
import Graff from './assets/Graff.jpg'

import Azz from './assets/Azzafahmy.mp4'
import Ch from './assets/chopard.mp4'
import hublot from '../components/OurBrands/assets/hublot.mp4'
import Sain from '../components/OurBrands/assets/saintlouis.mp4'
import GC from '../components/OurBrands/assets/graff.mp4'


import AfterSell from '../components/After-sell/after-sell.jsx'
import Footer from '../components/Footer/Footer.jsx'
import MediaPR from '../MediaPR/MediaPR.jsx'
const Home = () => {
  return (
    <> 
    <Navbar/>
    <Hero2
      videos={[
         Azz,
        Sain,
         GC,
          hublot,
          Ch,
        
        
      ]}
     
    />


    <AboutUs/>
    
    <OurBrandsHero/> 
   
    <LocationsTest/>
    <Crazy/>
    <OurBrands/>
    <StoryTimeline/>
    <D/>  
    <AfterSell/>
    <MediaPR/>
    <Footer/>
   
   
    </>
  )
}

export default Home