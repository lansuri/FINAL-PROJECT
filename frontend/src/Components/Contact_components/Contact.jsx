import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container-fluid"  style={{background:'#f4f6f5ff'}}>
      <div className="container">
         <h2 className=' mt-1'>Contact Us</h2>
         <br />
         <br />
        <br />
        <br />
        <div className="row" id='rowcontact'>
          <div className="col-lg-4">
               <h2 className='ms-5' id='contacttopic'>Contact Details:</h2>
    
          <h4 className='mt-4'id='contactmail'>Email</h4>
        <div className='d-flex'>
           <i className="fa-solid fa-envelope mt-2 me-2" id='contacticon1'></i>
           <p id='contactmail1'>support@Fresho!.in</p>
       </div>

        <h4 className='mt-4'id='contactmail'>Phone</h4>
       <div className='d-flex'>
          <i className="fa-solid fa-phone  mt-2 me-2"  id='contacticon1'></i>
          <p id='contactmail1'>+916374254881</p>
       </div>
       <div className='d-flex'>
          <i className="fa-solid fa-phone  mt-2 me-2"  id='contacticon1'></i>
          <p id='contactmail1'>+918489243576</p>
       </div>
       <div className='d-flex'>
          <i className="fa-solid fa-phone  mt-2 me-2" id='contacticon1'></i>
          <p id='contactmail1'>+917373928313</p>
      </div>
      </div>
      <div className="col-lg-4">
        <h4 className='mt-5 'id='contactaddress'>Address:</h4>
        <div className="d-flex" id='location'>
            <i className="fa-solid fa-location-dot mt-2 me-2"></i>
            <p>5-th Floor,</p>
        </div>
         <div  id='address'> 
            <p>yaggappa Complex,</p>
            
             <p>362-Anna Nagar,</p> 
          
            <p>Thanjavur</p>
            <div className="row">
            <div class="social-icons">
            <a href="https://www.facebook.com"><i class="fab fa-facebook-f mx-2"></i></a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram mx-2"></i></a>
            <a href="https://twitter.com/yourusername"><i class="fab fa-twitter mx-2"></i></a>
            <a href="https://www.youtube.com/yourchannel"><i class="fab fa-youtube mx-2"></i></a>
</div>
         </div>
         </div>
         
            
      </div>
       </div>

      {/* ============card================ */}
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125432.38736747965!2d79.04904726376787!3d10.75280903879028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453039%3A0xe113da9b1f632be6!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1759387784513!5m2!1sen!2sin" width="1300" height="600" style={{border:'0'}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     

     
    
     
      </div>
    </div>
   
    </>
  )
}

export default Contact