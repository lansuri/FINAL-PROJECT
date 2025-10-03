import React, { useContext } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Datas } from '../../assets/asset'
import { MyContext } from '../../Context/MyContextProvider'

const Deals = () => {
  const{AddtoCartFun}=useContext(MyContext)
  return (
    <>
    <div className="container-fluid">
        <div className="container">
            <h2 className='mt-5'>Deal of the Day</h2>
        
      <Swiper 
     modules={[Navigation,Autoplay]}
     spaceBetween={50}
     slidesPerView={1}
      breakpoints={{          
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
         
        }}
     navigation={true}
     autoplay={{delay:5000}}
     speed={5000}
     loop={true}
    >
        
           {
        Datas.filter(a => a.category === "deal").map((value,index) =>(
            <SwiperSlide key={index}>
            <div className="row">
              {/* <div className="col-lg-2 col-3 mt-3"> */}
                <div className="card" id='cardimg'>
                    <span className="badge">25% off</span>
                    <img src={value.img}  id="imgdeal"alt="" />
                    <div className="card-body" id='imgcontent' >
                    <h4 className='name'>{value.name}</h4>
                    <h6>₹{value.price}</h6>
                    <p>{value.weight}g</p>
                  <button className='btn w-100' id='btn' onClick={()=>AddtoCartFun(value.id)}>Add To Cart</button>
                </div>
                </div>
                </div>
                
              {/* </div> */}
            </SwiperSlide>
        ))
     }
     
     
    </Swiper>
    </div>
    </div>   
    </>
  )
}

export default Deals