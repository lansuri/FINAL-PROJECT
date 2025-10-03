import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { alldatas } from '../../assets/asset';

const Slide = () => {
     
   useEffect(() => {
       AOS.init({
         duration: 1000,   
         once: true,       
       });
     }, []);

  return (
    <>
    <div className="container-fluid">
        <div className="container">
            <h3 className='ms-5'></h3>

            <div className="row">
                <div className="col-lg-4">
                    <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={alldatas.slide2} alt="" />
                     <h3 className='ms-4 m'>Sweet</h3>
                    </div>
                </div> 

                <div className="col-lg-4">
                    <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <img src={alldatas.slide1} alt="" />
                  <h3>Fresh</h3>
                     </div>
                </div>

                <div className="col-lg-4 mt-5">
                   < div data-aos="zoom-out-left">
                  
               <img src={alldatas.slide3} alt="" style={{height:'100px'}}/>
               <h3 className='mt-5'>Veggie</h3>
                   </div>
                </div>

            </div>
           
            

       

        </div>
    </div>
    
    </>
  )
}

export default Slide