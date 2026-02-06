import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/OurStory/AboutUs'
import OurBrands from '../components/OurBrands/OurBrands'
import BoutiqueLocator from '../components/Boutiques/BoutiqueLocator'
import OurBrandsHero from '../components/OurBrands/OurBrandsHero'
import ParticleCanvas from '../components/ParticleCanvas.jsx' 
import Crazy from '../components/Crazy/Crazy.jsx' 
import StoryTimeline from '../components/Story/Storytimeline.Jsx'
import D from '../components/D/D.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <ParticleCanvas/>
    <OurBrandsHero/> S
    <BoutiqueLocator/>
    <Crazy/>
    <OurBrands/>
      <StoryTimeline/>
      <D/>  
   
    </>
  )
}

export default Home