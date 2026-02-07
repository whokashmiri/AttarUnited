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
    <Hero
  images={[
    "https://images.pexels.com/photos/3785932/pexels-photo-3785932.jpeg",
    "https://images.pexels.com/photos/6766410/pexels-photo-6766410.jpeg",
    "https://images.pexels.com/photos/15785523/pexels-photo-15785523.jpeg",
    "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg",
    "https://images.pexels.com/photos/12545929/pexels-photo-12545929.jpeg",
    "https://images.pexels.com/photos/15785524/pexels-photo-15785524.jpeg",
  ]}
/>

    <AboutUs/>
    <OurBrands/>
    <BoutiqueLocator/>
       
    </>
  )
}

export default Home