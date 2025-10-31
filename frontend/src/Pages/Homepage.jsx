import React from 'react'
import Navbar from '../Components/Common_components/Navbar'
import Footer from '../Components/Common_components/Footer'
import MySwiper from '../Components/Home_page/MySwiper'
import Flashdeal from '../Components/Home_page/Flashdeal'
import Delivery from '../Components/Home_page/Delivery'
import Deals from '../Components/Home_page/Deals'
import Section from '../Components/Home_page/Section'
import Slide from '../Components/Home_page/Slide'




const Homepage = () => {
  return (
  <>
     <Navbar/>
     <MySwiper/>
     <Delivery/>
     <Flashdeal/>
     <Section/>
     <Deals/>
     <Slide/>
     <Footer/>
    
  </>
   

  )
}

export default Homepage