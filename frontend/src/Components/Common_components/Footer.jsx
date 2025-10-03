import React from 'react'

const Footer = () => {
  return (
    <>
     <div className="container-fluid" id='Footer'>
      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-12 mt-5 ">
          <h4>Fresho!</h4>
          <p>It's time to #EatGoodDoGreat</p>
          <p>Better Fruits & Vegetables starts with Fresho!</p>
          <p>Healthy outside starts from the inside.</p>
          <p>Eat fresh,stay fresh</p>
        </div>

        <div className="col-lg-2 col-6 mt-5 " >
          <h4>Contact Us</h4>
          <div className='d-flex mb-2 align-item-center'>
            
            <i className="fa-solid fa-envelope mt-2 me-2"></i>
            <span>support@Fresho!.in</span>
           
          </div>
          
          <div>
              <i className="fa-solid fa-phone  mt-2 me-2"></i>
            <span>+91-9944770877</span>
          </div>
            
          <div>
              <i className="fa-solid fa-location-dot mt-2 me-2"></i>
              <span>5-th Floor,</span>
              <span>yaggappa Complex,</span>
              <span>362-Anna Nagar,</span>
              <span>Thanjavur.</span>
            
          </div>
            
        </div>
        
        <div className="col-lg-2 col-6 mt-5">
          <h4>All Payment Models</h4>
          <p>Cards,UPIs,Wallets,Net Banking and COD</p>
        </div>

        <div className="col-lg-2 col-6 mt-5">
          <h4>For You</h4>
          <p>Between 7 a.m to 10 p.m, Monday to Sunday.</p>
          <p>Delivering the product within 6Hrs</p>
        </div>
       
       <div className="col-lg-3 col-6 mt-5">
          <h4>Customer Support</h4>
          <p>Easy Return for items damaged during delivery or quality issue</p>
          <p>Terms and Condition</p>

        <div className='mx-2'>
          <i className="fa-brands fa-square-facebook mx-2"></i>
          <i className="fa-brands fa-instagram mx-2"></i>
          <i className="fa-brands fa-youtube mx-2"></i>
          <i className="fa-brands fa-twitter mx-2"></i>
        </div>
       </div>
      </div>

      </div>
     </div>
    </>
  )
}

export default Footer