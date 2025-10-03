import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContextProvider'

const Vegetable = () => {
    const {productData ,navigate,AddtocartFun} = useContext(MyContext)
  return (
    <>
      <div className="container-fluid">
          <div className="row g-3" id='rowveg'> 
            {/* <div className="col-lg-3"> 
               <ul className="list-group" id='listgroup'>

                <li className='list-group-item'>
                  <a href="/home" className='text-decoration-none'id='alist'>HOME</a>
                </li>
                 <li className='list-group-item'>
                 <a href="/vegetable" className='text-decoration-none'id='alist'>Vegetables</a>
                 </li>
                 <li className="list-group-item">
                    <a href="/fruit" className='text-decoration-none' id='alist'>Fruits</a>
                 </li>
                 <li className="list-group-item">
                    <a href="/root" className='text-decoration-none'id='alist'>Root Vegetables</a>
                 </li>
                 <li className="list-group-item">
                    <a href="/leafy" className='text-decoration-none'id='alist'>Leafy Vegetables</a>
                 </li>
                 <li className="list-group-item">
                    <a href="/dairy" className='text-decoration-none'id='alist'>Dairy Products</a>
                 </li>
               </ul>  

             </div>   */}
            {productData.filter(value => value.category === "Vegetables").map((value,index) =>{
              
    
                return(
                    <div className="col-lg-3 col-md-6 col-sm-12 justify-content-start mb-4" key={index}>
                        <div className="card" id='cardveg' onClick={() => navigate(`/product/${value._id}`)}>
                            <img src={value.img} alt="" className='img-fluid card-img-top mx-5 mt-2' id='vegimg' />
                    
                        <div className="card-body">
                            <h5 id='vegh5'>{value.type}</h5>
                            <h6 id='vegh6'>₹{value.price}</h6>
                            <p id='vegp'>{value.desc}</p>
                            {/* <button className='btn w-100' id='btn' onClick={() => AddtocartFun(selectedProduct)} >Add To Cart</button> */}
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
     </div>
    </>
  )
}

export default Vegetable