import React, { useContext } from 'react'
import { my_asset } from '../assets/asset'
import { MyContext } from '../Context/ContextProvider'

const Form = () => {
  const {category,setCategory,type,setType,desc,setDesc,price,setPrice,previewImg,ImageFun,SubmitFun} = useContext(MyContext)
  return (
    <>

    <div className='container-fluid' id="bground">
      <div className='container' >
          <div className="justify-content-center align-item-center">
          <div className='row p-5 mx-5'>
          <div className='col-lg-6 col-md-4 col-sm-3'>
            <div className='card mt-5'>
              <div className='card-body'>
                  <form onSubmit={SubmitFun}>
                    <input type="file" id='myuploadimg' hidden onChange={ImageFun} />
                    <label htmlFor="myuploadimg">
                      <img src={ previewImg? previewImg:my_asset.upload_img} alt="" height={200} width={200} />
                    </label>
                    
                    <div className="input-box">
                      <select className='form-control my-4' value={category} onChange={e=> setCategory(e.target.value)}>
                      <option hidden>choose</option>
                      <option>Fruits</option>
                      <option>Vegetables</option>
                      <option>Leafy Vegetables</option>
                      <option>Root Vegetables</option>
                      <option>Dairy Products</option>
                    </select>
                    </div>
                    

                    <input type="text" placeholder='Enter Product Name...' className='w-100 form-control my-3' value={type} onChange={e=> setType(e.target.value)}/>

                    <input type="text" placeholder='Enter Product Describtion...' className='w-100 my-3 form-control' value={desc} onChange={e=> setDesc(e.target.value)}/>

                    <input type="number" placeholder='Enter Product Price..'className='w-100 my-3 form-control' value={price} onChange={e => setPrice(e.target.value)}/>

                    <input type="submit" className='btn btn-primary w-100'/>
                  </form>
              </div>

            </div>

          </div>

        </div>
         </div>
       
        
      </div>
     </div>      
    </>
  )
}

export default Form