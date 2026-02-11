import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/OurStory/AboutUs'
import OurBrands from '../components/OurBrands/OurBrands'
import BoutiqueLocator from '../components/Boutiques/BoutiqueLocator.jsx'
import OurBrandsHero from '../components/OurBrands/OurBrandsHero'
import ParticleCanvas from '../components/ParticleCanvas.jsx' 
import Crazy from '../components/Crazy/Crazy.jsx' 
import StoryTimeline from '../components/Story/Storytimeline.Jsx'
import D from '../components/D/D.jsx'

import Hoplot from './assets/Hublot.jpg'
import chopard from './assets/Chopard.jpg'
import Azza from './assets/Azza.webp'
import Saint from './assets/Saint.jpg'
import GC3 from './assets/GC3.webp'
import Graff from './assets/Graff.jpg'

import AfterSell from '../components/After-sell/after-sell.jsx'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
  images={[
   Hoplot,
   chopard,
   Azza,
   Saint,
   GC3,
   Graff,
  ]}
/>

    <AboutUs/>
    <ParticleCanvas/>
    <OurBrandsHero/> 
    <BoutiqueLocator/>
    <Crazy/>
    <OurBrands/>
      <StoryTimeline/>
      <D/>  
      <AfterSell/>
   
    </>
  )
}

export default Home