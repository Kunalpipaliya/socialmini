import { Link } from '@mui/material'
import React from 'react'

const Header = () => {
  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const handleLogout=()=>{
    localStorage.removeItem('currentUser')
  }
  return (
    <div id="header1">

    <div id='header' className='px-4 py-2 alert alert-dark'>
      <div className="d-flex justify-content-between align-items-center">

        <h1>SocialMini.</h1>
        <div className="d-flex gap-2">
          {currentUser?<Link className='nav-link text-decoration-none' href="/login"><button className="btn btn-dark" onClick={handleLogout}>Logout</button></Link>:<Link className='nav-link text-decoration-none' href="/login"><button className="btn btn-dark">Login</button></Link>}
           {!currentUser?<Link className='nav-link text-decoration-none' href="/signup"><button className="btn btn-dark">Sign up</button></Link>:""}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
