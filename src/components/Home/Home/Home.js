import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import HomeProduct from '../HomeProduct/HomeProduct'
import Sliders from '../Sliders/Sliders'
import WeAreBest from '../WeAreBest/WeAreBest'
import WhyChosse from '../WhyChosse/WhyChosse'
import RattingSlider from '../RattingSlider/RattingSlider'

const Home = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Sliders></Sliders>
               <HomeProduct></HomeProduct>
               <WhyChosse></WhyChosse>
               <WeAreBest></WeAreBest>
               <div className="container-fluid rattingSliderHare">
                    <RattingSlider></RattingSlider>
               </div>
               <Footer></Footer>
          </div>
     )
}

export default Home
