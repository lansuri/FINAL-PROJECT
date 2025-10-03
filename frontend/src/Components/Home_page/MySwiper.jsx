import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation , Pagination , Autoplay} from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { alldatas } from '../../assets/asset'
const MySwiper = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <Swiper
         modules = {[Navigation , Pagination ,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          autoplay={{delay:2000}}
          pagination={{clickable:true}}
          speed={3000}
          loop={true}
    >
    
    <SwiperSlide className="swiper1">
        <img src={alldatas.veg} alt="" />
        <div className="swipercontent1">
            <h5>Vegetables</h5>
            <h1>Freshness you can see,<br /> health you can feel</h1>
            <a href="/vegetable" className='btn btn-dark'>SHOP NOW</a>
        </div>
    </SwiperSlide>

    <SwiperSlide className='swiper1'>
       <img src={alldatas.fruit} alt="" />
       <div className="swipercontent1">
        <h5>Fruits</h5>
         <h1>
          Fruit today, <br />health tomorrow
         </h1>
         <a href="/fruit" className='btn btn-dark'>SHOP NOW</a>
       </div>
    </SwiperSlide>

     <SwiperSlide className='swiper1'>
      <img src={alldatas.leafy} alt="" />
      <div className="swipercontent1">
        <h5>Leafy Vegetables</h5>
        <h1>Green on your plate,<br /> health in your life.</h1>
        <a href="/leafy" className='btn btn-dark'>SHOP NOW</a>
      </div>
      
     </SwiperSlide>

     <SwiperSlide className='swiper1'>
       <img src={alldatas.root} alt="" />
       <div className="swipercontent1">
        <h5 className='root '>Root Vegetables</h5>
        <h1 className='root1'>Root for health,<br /> root for life!</h1>
        <a href="/root" className='btn btn-dark'>SHOP NOW</a>
       </div>
     </SwiperSlide>

     <SwiperSlide className='swiper1'>
       <img src={alldatas.dairy} alt="" />
       <div className="swipercontent1">
        <h5>Dairy Products</h5>
        <h1>Pure dairy,<br /> pure delight.</h1>
        <a href="/dairy" className='btn btn-dark'>SHOP NOW</a>
       </div>
     </SwiperSlide>
    </Swiper>
    
        </div>
    </div>
  </>  
  )
}

export default MySwiper