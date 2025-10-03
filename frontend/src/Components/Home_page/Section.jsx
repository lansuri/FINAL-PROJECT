import React from 'react'
import { alldatas } from '../../assets/asset'

const Section = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <div className="row" id='sectionrow'>
           
             <div className="col-lg-6 col-12">
            <div className=" card me-5" id='sectioncard'>
              <img src={alldatas.section1} id='sectionimg' alt="" />
               <div id="sectioncontent">
                 <a href="/vegetable" className='btn '>SHOP NOW</a>
                </div> 
        
            </div>
                
           </div>
          
           
            <div className="col-lg-6 col-12">
            <div className=" card me-5" id='sectioncard'>
              <img src={alldatas.section2} id='sectionimg' alt="" />
               <div id="sectioncontent">
              <a href="/root" className='btn'>SHOP NOW</a>
            </div>
            </div>
            
          </div>

          
         
      </div>

        <div className="row" id='sectionrow2'>
          <div className="col-lg-6 col-12">
             <div className="card me-5" id='sectioncard'>
              <img src={alldatas.section3} id='sectionimg' alt="" />
               <div id="sectioncontent">
              <a href="/dairy" className='btn'>SHOP NOW</a>
            </div>
            </div>
            
          </div>
          
          <div className="col-lg-6 col-12">
             <div className="card me-5" id='sectioncard'>
              <img src={alldatas.section4} id='sectionimg'style={{height:'330px'}} alt=""/>
                <div id="sectioncontent">
              <a href="/fruit" className='btn'>SHOP NOW</a>
            </div>
            </div>
           

          </div>
         </div>
      </div> 
    </div>
    </>
  )
}

export default Section