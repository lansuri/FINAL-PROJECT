 import React from 'react'
import Table from '../Components/Table'
 
 const Viewproducts = () => {
   return (
     <>
          <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
         <div className="container-fluid">
         <h4 className='ms-5'>VIEW PRODUCTS</h4>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto me-5">
         <li className="nav-item ">
          <a className="nav-link" href="/">ADD PRODUCTS</a>
          </li>
       </ul>
      </div>
    </div>
   </nav>
      </div>
      
     <Table/>
     </>
    
   )
 }
 
 export default Viewproducts






