import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
    <h4 className='ms-5'>ADMIN PANEL</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item ">
          <a className="nav-link" href="/viewproducts">VIEW PRODUCTS</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="/viewusers">VIEW USERS</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default Navbar 
