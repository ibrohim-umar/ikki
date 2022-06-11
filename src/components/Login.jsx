import React from 'react'
import './style/Login.css'

const Login = () => {
  return (
    <div className='login' >
      <form className='form' >
          <label >Name</label>
           <input  type="text" placeholder='Name' />
      </form>
         <form className='form' >
          <label >Email</label>
           <input  type="text" placeholder='Email' />
        </form>

        <form className='form' >
        <label >Phonenumber</label>
          <input  type="number" placeholder='Phone' />
       </form>
         
          
    
    </div>
  )
}

export default Login