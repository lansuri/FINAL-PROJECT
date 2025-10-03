import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContextProvider'




const Formpage = () => {

    const { username , setUsername ,password , setPassword ,email , setEmail ,loginUsername ,loginPassword ,setLoginPassword , setLoginUsername , RegisterSubmitFun , LoginSubmitFun} = useContext(MyContext)


  return (
    <>
      <div className="container-fluid" id='bguser' >
        <div className="container"  >
         
         {/* <div className="card" id='samplecard'> */}
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2">
              <div className="card my-5" id='usercard'>
                <form onSubmit={RegisterSubmitFun}>
                  
                  <div className="card-header" id='usercard-header'>
                 <h5 className='ms-4 justify-content-center'>CREATE YOUR ACCOUNT</h5>
                </div>
                <div className="card-body" id='usercard-body'>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)}placeholder='Enter user name..'className='form-control w-100 my-5'/>

                  <input type="text"  value={password} onChange={e => setPassword(e.target.value)}className='form-control w-100 my-5' placeholder='Enter password..' />

                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='w-100 form-control my-5' placeholder='Enter email..' />

                  <button type='submit' className='btn btn-secondary w-75 ms-5'>SIGN UP</button>
                </div>

                </form>
                
              </div>
              
               
            </div>
            
              <div className="col-lg-4 col-md-3 col-sm-2">
              <div className="card my-5" id='usercard'>
                <form onSubmit={LoginSubmitFun}>
                  
                  <div className="card-header" id='usercard-header' >
                 <h5 className='mx-4 justify-content-center'>WELCOME</h5>
                </div>
                <div className="card-body" id='usercard-body'>
                  <input type="text" value={loginUsername} onChange={e => setLoginUsername(e.target.value)}  placeholder='Enter user name..'className='form-control w-100 my-5' />
                  

                  <input type="text" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className='form-control w-100 my-5' placeholder='Enter password..' />
                  

                  <div className='w-100 my-5'>forgot password?</div> 

                  <button  type="submit" className='btn btn-secondary w-75 ms-5'>SIGN IN</button>
                </div>

                </form>
                
              </div>
              
              
            </div>





          </div>

         {/* </div> */}

          {/* <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2">
              <div className="card my-5" id='usercard'>
                <form onSubmit={RegisterSubmitFun}>
                  
                  <div className="card-header" id='#usercard-header'>
                 <h3>CREATE YOUR ACCOUNT</h3>
                </div>
                <div className="card-body" id='usercard-body'>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)}placeholder='Enter user name..'className='form-control w-100 my-5'/>

                  <input type="text"  value={password} onChange={e => setPassword(e.target.value)}className='form-control w-100 my-5' placeholder='Enter password..' />

                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='w-100 form-control my-5' placeholder='Enter email..' />

                  <button type='submit' className='btn btn-secondary w-75 ms-5'>SIGN UP</button>
                </div>

                </form>
                
              </div>
              
               
            </div>
            
              <div className="col-lg-4 col-md-3 col-sm-2">
              <div className="card my-5 " id='usercard'>
                <form onSubmit={LoginSubmitFun}>
                  
                  <div className="card-header" id='usercard-header'>
                 <h3>WELCOME</h3>
                </div>
                <div className="card-body" id='usercard-body'>
                  <input type="text" value={loginUsername} onChange={e => setLoginUsername(e.target.value)}  placeholder='Enter user name..'className='form-control w-100 my-5' />
                  

                  <input type="text" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className='form-control w-100 my-5' placeholder='Enter password..' />
                  

                  <div className='w-100 my-5'>forgot password?</div> 

                  <button  type="submit" className='btn btn-secondary w-75 ms-5'>SIGN IN</button>
                </div>

                </form>
                
              </div>
              
              
            </div>





          </div> */}


        </div>
      </div>
    </>
  )
}

export default Formpage