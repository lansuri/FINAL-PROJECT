import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import { alldatas } from '../../assets/asset';

const About = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,   
      once: true,       
    });
  }, []);
  return (
    <>
     
       <div className="container-fluid">
        <div className="container" id='aboutcard'> 
          <h3 className='my-5'>About Us</h3>
           <div className="row" id='aboutrow'>

              <div className="col-lg-5 col-12" id='aboutcol1'>
                  <div data-aos="fade-up-right" id='aboutaos'>
                    <img src={alldatas.about} alt="" id='aboutimg' className='mb-5' style={{height:'550px'}}/>
                 </div>
              </div>
              <div className="col-lg-6 col-12">
                <p style={{left:'500px'}} className='ms-5'>Welcome to <span style={{fontWeight:'bold'}}>Fresho!</span>, your trusted destination for farm-fresh vegetables, seasonal fruits, and pure dairy products.
                <br />

                We believe that healthy living starts with fresh, natural, and quality food. That’s why we work closely with farmers and suppliers who share our passion for delivering goodness straight from the farm to your table.
                <br />

                <br />Our promise is simple:
                <br />

               <span style={{fontWeight:'bold'}}>Freshness Guaranteed –</span>  Every product is carefully selected to ensure maximum freshness and taste.
                <br />

<span style={{fontWeight:'bold'}}> Quality You Can Trust –</span> We prioritize natural, chemical-free, and hygienically handled produce.
<br />

<span style={{fontWeight:'bold'}}>Sustainable & Local –</span> By supporting local farmers, we ensure fair trade and eco-friendly practices.
<br />

Whether it’s crisp vegetables, juicy fruits, or wholesome dairy, we make sure you get the best every time you shop with us.
<br />

At <span style={{fontWeight:'bold'}}>Fresho!</span>, we don’t just sell food—we deliver health, happiness, and a touch of nature to your daily life.</p>
              </div>
           
           
           
           </div>
          

        </div>
      </div>


      {/* <div className="container-fluid">
        <div className="container ">
          <h5>Why Choose Us</h5>
          <p>We are committed to making healthy eating simple, affordable, and accessible for everyone.</p>

        </div>
      </div>
       */}
      

    
    
    </>
  )
}

export default About