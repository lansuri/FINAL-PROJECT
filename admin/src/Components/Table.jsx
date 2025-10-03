import React, { useContext } from 'react'
 import { MyContext } from '../Context/ContextProvider'
  import { my_asset } from '../assets/asset' 
  
  const Table = () => { const { productData , RemoveProduct,UpdateImageFun,updateCategory,setUpdateCategory,updateDesc,setUpdateDesc,updatePrice,setUpdatePrice,updateType,setUpdateType,updatePreviewImg,UpdateSubmitFun,UpdateFun} = useContext(MyContext)
  
  return ( 
  
    <> 
     <div className="container">
       <div className="table-content">
         <table className='table table-primary text-center my-3 align-middle'> 
          <thead >
             <tr>
               <th>Image</th>
               <th>Type</th>
               <th>Category</th>
               <th>Desc</th> 
               <th>Price</th> 
               <th>Edit</th> 
               <th>Action</th> 
              </tr> 
          </thead> 
          <tbody>
             { productData.length === 0 
             ? 
              <tr> 
                <td colSpan={7} className='text-danger'>No Products..</td> 
              </tr>
            :
              productData.map((value,index)=>{ 
                return(
                   <tr key={index}>
                    <td><img src={value.img} alt="" height={60} /></td>
                    <td>{value.type}</td> <td>{value.category}</td> 
                    <td>{value.desc}</td> <td>₹{value.price}</td> 
                    <td><button className='btn btn-primary' data-bs-toggle = "modal" data-bs-target="#mymodal" onClick={() =>UpdateFun(value._id)}>Update</button></td> 
                    <td><span onClick={()=>RemoveProduct(value._id)} className='fs-3 text-danger'>&times;</span></td> 
                    </tr> 
                  ) 
                  }
                  )
                   } 
              </tbody> 
                  
          </table>
         </div>
     </div> 
              
              
              
              <div className="modal fade" id='mymodal'> <div className="modal-dialog">
                 <div className="modal-content"> 
                  <div className="modal-header">
                     <h5 className="modal-title">UPDATE</h5> 
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                     </div>
                      <div className="modal-body"> 
                        <form onSubmit={UpdateSubmitFun}> 
                          <input type="file"hidden id='updateimg' onChange={UpdateImageFun} />
                           <label htmlFor='updateimg'> 
                            <img src={updatePreviewImg? updatePreviewImg:my_asset.upload_img} alt="" height={200} /> 
                           </label> 
                           <select className='form-control my-3' value={updateCategory} onChange={e=>setUpdateCategory(e.target.value)}>
                             <option>Fruits</option> 
                             <option>Vegetables</option> 
                             <option>Leafy Vegetables</option> 
                             <option>Root Vegetables</option> 
                             <option>Dairy Products</option> 
                           </select>
                          <input type="text" placeholder='Enter Updated Type.. ' value={updateType} onChange={e=>setUpdateType(e.target.value)} className='form-control my-3' /> 
                          <input type="text" placeholder='Enter Updated Desc..' value={updateDesc} onChange={e=>setUpdateDesc(e.target.value)} className='form-control my-3 '/> 
                          <input type="number" placeholder='Enter Updated Price..' value={updatePrice} onChange={e=>setUpdatePrice(e.target.value)} className='form-control my-3' /> 
                          <input type="submit" className='btn btn-outline-success w-100' /> 
                  </form> 
                  
                  </div> 
              </div> 
          </div> 
      </div> 
      
      </> 
      ) }


      export default Table