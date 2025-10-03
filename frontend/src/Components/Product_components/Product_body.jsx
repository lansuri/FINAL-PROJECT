import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../../Context/MyContextProvider'

const Product_body = () => {

    const {productData,AddtocartFun} = useContext(MyContext)

    const {id} = useParams()

    const selectedProduct = productData.find(a => a._id.toString() === id )
  return (
    <>
  



     <div className="container my-5">
      <div className="card shadow-lg rounded-4 overflow-hidden" id='productcard'>
        <div className="row g-0">
          {/* Image Section */}
          <div className="col-md-6">  
            <img 
              src={selectedProduct.img} 
              alt="" 
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div className="card-body p-4" id='productbody'>
              <h5 className="card-title mt-5 mb-5" id='producth5' style={{fontWeight:'bold'}}>{selectedProduct.type}</h5>
              <h6 className="text-success mt-5 mb-5" id='producth6' style={{fontWeight:'bold'}}>Price: ₹{selectedProduct.price}</h6>
              <p className="card-text mt-5 mb-5" id='productp'>{selectedProduct.desc}</p>
              <button 
                className="btn w-100 mt-3" style={{background:'#208718',color:'white'}}
                onClick={() => AddtocartFun(selectedProduct)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product_body