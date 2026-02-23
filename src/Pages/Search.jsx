import React, { useState } from 'react'

const Search = ({ users, setUsers }) => {
    const [search, setSearch] = useState('')
    const filteredUsers = users.filter((u) => u.name === search||u.email===search)
    return (
        <div>
            <form action="">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control rounded-pill w-75 m-auto" placeholder='Search users by username' />
            </form>
            {
                
                filteredUsers.map((item, index) => {
                    return (
                        <div className="p-3 shadow-lg d-flex flex-wrap justify-content-between align-items-center rounded w-75 m-auto mt-4">

                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-circle-user fs-1"></i>
                            <div>
                                <strong>{item.name}</strong>
                                <br />
                                <small className="text-muted">{item.email}</small>
                            </div>
                        </div>
                        <div className="d-flex gap-2">  
                            <button className="btn btn-primary">Follow</button>
                            <button className="btn btn-primary">Message</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search
