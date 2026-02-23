import Link from '@mui/material/Link'
import React from 'react'


const Navbar = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
    return (
        <div>
            <nav id='nav' className='alert alert-dark  w-100 m-auto py-2 ' >
                <ul className='nav nav-pills justify-content-around'>
                    <li className='nav-items'>

                        <Link className='nav-link text-dark text-decoration-none ' href="/"><i className="fa-solid fa-house fs-3"></i></Link>
                    </li>
                    <li className='nav-items'>

                        <Link className='nav-link text-dark text-decoration-none ' href="/notification"><i className="fa-solid fa-comment-dots fs-3"></i></Link>
                    </li>
                    <li className='nav-items'>

                        <Link className='nav-link text-dark text-decoration-none' href={currentUser?"/post":"/login"}><i className="fa-solid fa-plus fs-3"></i></Link>
                    </li>
                    <li className='nav-items'>

                        <Link className='nav-link text-dark text-decoration-none' href="/search"><i className="fa-solid fa-magnifying-glass fs-3"></i></Link>
                    </li>
                    
                    <li className='nav-items'>

                        <Link className='nav-link text-dark text-decoration-none' href={currentUser?"/profile":"/login"}><i className="fa-solid fa-circle-user fs-3"></i></Link>
                    </li>
                    {/* <li className='nav-items'>

                        <Link className='nav-link text-white text-decoration-none' href="/login">Login</Link>
                    </li>
                    <li className='nav-items'>

                        <Link className='nav-link text-white text-decoration-none' href="/signup">Sign up</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
