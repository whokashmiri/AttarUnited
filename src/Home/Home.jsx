import React from 'react'
import Navbar from '../Layout/Navbar'

import Hero2 from '../components/Hero/Hero2.jsx'
import AboutUs from '../components/OurStory/AboutUs'
import OurBrands from '../components/OurBrands/OurBrands'

import OurBrandsHero from '../components/OurBrands/OurBrandsHero'

import StoryTimeline from '../components/Story/StoryTimeline.jsx'
import D from '../components/D/D.jsx'
import LocationsTest from '../components/D/Loctionstest.jsx'

import Azza from './videos/Azza.mp4'
import Graff from './videos/Graff.mp4'
import Chopard from './videos/Chopard.mp4'
import Hublot from './videos/Hublot.mp4'
import Saint from './videos/Saint-Louis.mp4'
import AfterSell from '../components/After-sell/after-sell.jsx'
import Footer from '../components/Footer/Footer.jsx'
import MediaPR from '../MediaPR/MediaPR.jsx'

const Home = () => {
  return (
    <> 
    <Navbar/>
   <Hero2
  videos={[
    Azza,
    Graff,
    Chopard,
    Hublot,
    Saint,
  ]}
/>


    <AboutUs/>
    
    <OurBrandsHero/> 
   
    
    {/* <Crazy/> */}
    <StoryTimeline/>
    <OurBrands/>
    
    <D/>  
     <LocationsTest/>
    <AfterSell/>
    <MediaPR/>
   
    {/* <ContactForm/> */}
    <Footer/>
   
   
    </>
  )
}

export default Home