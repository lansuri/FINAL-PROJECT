import React, { useContext } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperSlide } from 'swiper/react'
import { Datas } from '../../assets/asset'
import { MyContext } from '../../Context/MyContextProvider'

const Flashdeal = () => {
  const{AddtocartFun} = useContext(MyContext)
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <h2 className='mt-5'>Flash Deal:- lowest price Guaranteed</h2>
        <Swiper 
          modules = {[Navigation,Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{          
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200:{ slidesPerView: 6 },
        }}
          navigation={{clickable:true}}
          autoplay={{delay:2000}}
          speed={1000}
          loop={true}
        >
        {
        Datas.filter(a => a.category === "Flashdeal").map((value,index) =>(
          <SwiperSlide key={index}>
            <div className="row">
              {/* <div className="col-lg-2 col-12 mt-3"> */}
                {/* <div className="card-container"> */}
                  <div className="card" id='card'>
                    <div className="img1">
                    <img src={value.img} alt="" />
                    </div>
                <div className="card-body" id='card-body'>
                  <h5>{value.name}</h5>
                  <h6>₹{value.price}</h6>
                  <p>{value.weight}g</p>
                  <button className='btn w-100' id='btn' onClick={() =>AddtocartFun(value.id)} >Add To Cart</button>
               </div>
              </div>
            {/* </div> */}
             
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

export default Flashdeal