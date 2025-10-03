import React, { useContext, useState } from 'react'
import { alldatas } from '../../assets/asset'
import { MyContext } from '../../Context/MyContextProvider'
import{Link} from 'react-router-dom'

const Navbar = () => {
    const{LogOutFun,SearchFun,setInput,grandTotal,RemoveCartFun,cart,setCart,filteredData}=useContext(MyContext)

   
  return (

    <>
    {/* ========================================top bar=============================== */}
    <div  className='top-bar container-fluid d-flex align-item-center justify-content-between flex-wrap px-3'>
        <img src={alldatas.topbar} className="my-1 ms-5 d-flex align-item-center me-4" alt=""  height={35}/>

        <span className='my-1 ms-5 text-light text-sm-start flex-wrap'>**Free delivery on orders above ₹499!**</span>
        

        
      <i className="fa-solid fa-power-off mt-2" style={{color:'white',fontSize:'25px',cursor:'pointer'}} onClick={LogOutFun} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout"></i>
        
    </div>


    {/* ======================================navbar================================================ */}

    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
          <div className='d-flex w-100 align-item-center justify-content-between'>
           <img src={alldatas.logo} alt="" className='mx-3' height={80}/>

           <div className='d-flex justify-content-center w-100 my-3 '>
           <form className=" input-group w-75 mx-3 " style={{maxHeight:"35px"}}>
        <input type="text"className='form-control' placeholder='search..' id='search' onChange={SearchFun} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"/>

        <select className=' form-select d-none d-lg-block d-flex ' style={{maxWidth:"200px"}}>
          <option>All</option>
          <option>Vegetables</option>
          <option>LeafyVegetables </option>
          <option>Fruits</option>
          <option>RootVegetables</option>
          <option>Cheese</option>
          <option>Butter</option>
          <option>yogurt</option>
        </select>
    
         <img src={alldatas.search} alt="" height={40} id='searchimg' className='d-none d-lg-block d-flex'/>
         </form>
         {/* ========================cart============================ */}
          <i className="fa-solid fa-cart-shopping my-1 ms-5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"  style={{color:'white',fontSize:'30px'}} id='cart' ></i>
       </div>
       </div>

    <div>
       
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

           <span className="navbar-toggler-icon mt-3 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" ></span>
            </button>

     <div className="collapse navbar-collapse " id="navbarTogglerDemo02">


       <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
       <div className="offcanvas-header">
           <h5 id="offcanvasRightLabel">MENU</h5>
         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
         <div className="offcanvas-body">
            <ul className="list-group">
            <li className="list-group-item">
              <a href="/home" className='text-decoration-none'>Home</a>
            </li>
            <li className="list-group-item">
              <a href="/vegetable">Vegetables</a>
              
            </li>
            <li className="list-group-item">
              <a href="/fruit">Fruits</a>
            </li>
            <li className="list-group-item">
              <a href="/leafy">Leafy Vegetables</a>
            </li>
           <li className="list-group-item">
            <a href="/root">Root Vegetables</a>
           </li>
           <li className='list-group-item'>
            <a href="/dairy">Dairy Products</a>
           </li>
           <li className='list-group-item'>
            <a href="/faqs">Faqs</a>
           </li>
            <li className='list-group-item'>
            <a href="/about">About Us</a>
           </li>
           </ul>
        </div>
      </div>

      
    
       </div>
       </div>
       </div>

</nav>

     {/* ==============================================link page========================================== */}
<div className="container-fluid  p-2 d-none d-lg-block d-flex" id='page1'>
  <div className="container p-2 d-none d-lg-block d-flex " id='page'>
    <Link to={"/home"} className='mx-5' id='link '>Home</Link>

 
    <div className="dropdown justify-content-start" id='dropdown'style={{width:'50px',display:'inline',textDecoration:'none'}}>
     <a className=" dropdown-toggle mx-5" href="/vegetable" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
      Vegetable
     </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink" id='dropdownmenu'>
     <li><a className="dropdown-item" href="/vegetable">Vegetable</a></li>
    <li><a className="dropdown-item" href="/root">Root Vegetable</a></li>
    <li><a className="dropdown-item" href="/leafy">Leaf Vegetable</a></li>

  
  </ul>
</div> 
    {/* <select>
      <option><a href="/vegetable">Vegetable</a></option>
      <option>
       <Link to={"/leafy"} className='mx-5'>Leafy Vegetables</Link>
      </option>
      <option >
        <Link to={"/root"} className='mx-5'>Root Vegetables</Link>
      </option>
    </select> */}
   
   
    <Link to={"/fruit"} className='mx-5'>₹Fruits</Link>
    
    
    <Link to={"/dairy"} className='mx-5'>Dairy Products</Link>
    <Link to={"/faqs"} className='mx-5'>Faqs</Link>
    <Link to={"/contact"} className='mx-5'>Contact</Link>
    <Link to={"/about"} className='mx-5'>About Us</Link>
    
   </div>
</div>


{/* =============addtocart====================== */}

<div className="offcanvas offcanvas-top" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header full">
    <h5 id="offcanvasTopLabel" className='ms-5 mt-3'>Add To Cart</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
     <table className=" table table-info table-stripped mt-5">
      <thead>
        <tr>
          <th>ProductImage</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Qunatity</th>
          <th>Action</th>
        </tr>  
      </thead> 
       <tbody id="cart-remove">
         {
          cart.length === 0
          ?
          <tr>
            <td colSpan={6} className='text-center text-danger'>Cart is Empty!</td>
          </tr>
          :
          cart.map((value,index)=>{
            return(
              <tr className='text-center' key={index._id}>
              <td><img src={value.img} height={60} alt="" /></td>
              <td>{value.type}</td>
              <td>{value.price * value.quantity}</td>
              <td>{value.quantity}</td>
              <td><button className='btn btn-danger' onClick={() =>RemoveCartFun(value)}>Remove</button></td>
          </tr>
            )
          })
           
         }
      </tbody>  
      <tfoot>
        <tr>
          <td colSpan={6}><h6 className='text-end text-success'>Total:₹{grandTotal}</h6></td>
        </tr>
      </tfoot>  
        
    </table>
  </div>
</div>  
{/* ================================search========================================= */}




<div className="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Search Your Product</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small">

    <input type="text"className='form-control' placeholder='search..' id='search' onChange={SearchFun}/>
 <div className="row" id='searchrow'>
     {
          filteredData.length === 0
          ?
          ""
          :
          filteredData.map((value,index)=>{
            return(

              <div className="col-lg-3 col-6 " key={index}>
              <div className="card mt-4" id='searchcard'>
                <img src={value.img} alt="" id='imgsearch' />
                <div className="card-body">
                  <p id='searchp'>{value.type}</p>
                  <h5 id='search5'>{value.desc}</h5>
                  <p id='searchp'>{value.price}</p>
                </div>
              </div>
            </div>
            )
          })
        }
 </div>
   
  </div>
</div>
   
    </>
  )
}


export default Navbar