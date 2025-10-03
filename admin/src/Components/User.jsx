import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/ContextProvider'

const User = () => {

  const {userData , RemoveUserFun} = useContext(MyContext)
  return (
    <>
     <div className="container">
        <div className="table-content col-md-6 col-sm-4">
            <table className='table table-primary text-center my-3 '>
              <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.length === 0
                  ?
                  <tr>
                    <td colSpan={4} className='text-danger'>No User Found</td>
                  </tr>
                :
                userData.map((value , index) => {
                  return(
                    <tr key={index}>
                      <td>{value.username}</td>
                      <td>{value.password}</td>
                      <td>{value.email}</td>
                      <td><span className='fs-4 text-danger' onClick={() => RemoveUserFun(value._id)}>&times;</span></td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
        </div>
     </div>
    </>
  )
}

export default User