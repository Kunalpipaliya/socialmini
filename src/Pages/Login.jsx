import { Link } from '@mui/material'
import React, { useState } from 'react'

const Login = ({ users, setUsers }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (email) => {
       const foundUser= users.find((u) => u.email === email && u.password === password)
       localStorage.setItem('currentUser',JSON.stringify(foundUser))
       if(foundUser){
        // alert('welcome '+foundUser.name)
        window.location.href='/profile'
       }
       else{
        alert('login failed ')
       }

    }
    const [visiblePassword,setVisiblePassword]=useState(false)
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            
            <form action="" className="w-75 m-auto p-3 rounded shadow-lg">

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" placeholder='Enter Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type={visiblePassword===true?"text":"password"} placeholder='Enter Password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="checkbox" name="" id="" onClick={()=>setVisiblePassword(visiblePassword===false?true:false)} className='mb-3'/> Show Password
                <button className="btn btn-primary w-100" type='button' onClick={() => handleLogin(email)}>Login</button>
            <Link className='text-center text-decoration-none' href="/signup">Create New Account</Link>
            </form>
        </div>
    )
}

export default Login
