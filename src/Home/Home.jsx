import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/OurStory/AboutUs'
import OurBrands from '../components/OurBrands/OurBrands'
import BoutiqueLocator from '../components/Boutiques/BoutiqueLocator'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <OurBrands/>
    <BoutiqueLocator/>
       
    </>
  )
}

export default Home