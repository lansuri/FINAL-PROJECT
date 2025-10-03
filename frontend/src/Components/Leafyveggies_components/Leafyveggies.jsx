import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContextProvider'

const Leafyveggies = () => {
    const {productData , navigate} = useContext(MyContext)
  return (
    <>
     <div className="container">
      <div className="row">
        {productData.filter(value => value.category === "Leafy Vegetables").map((value,index) =>{
          console.log(productData)
            return(
                <div className="col-lg-3" key={index}>
                  <div className="card" id='cardveg' onClick={() => navigate(`/product/${value._id}`)}>
                    <img src={value.img} alt="" className='img-fluid card-img-top mx-5 mt-2' id='vegimg'/>
                
                  <div className="card-body">
                    <h5 id='vegh5'>{value.type}</h5>
                    <h6 id='vegh6'>{value.price}</h6>
                    <p id='vegp'>{value.desc}</p>
                    {/* <button className='btn w-100' id='btn' >Add To Cart</button> */}
                  </div>
                  
                  </div>
                </div>
            )
        } )}
      </div>
     </div>
    </>
  )
}

export default Leafyveggies