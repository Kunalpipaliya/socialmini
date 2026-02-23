import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Profile = ({ posts, setPosts,follow,setFollow }) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const filteredposts = posts.filter((p) => p.author === currentUser.name && p.authorid === currentUser.id)
    const handleDelete = (id) => {
        const updatedPost = posts.filter((p) => p.id !== id)
        setPosts(updatedPost)
    }
    const handleEdit=(id)=>{
        const filteredpost=posts.filter((p)=>p.id==id)
        
        
    }
    const filterFollowing=follow.filter((f)=>f.followedBy===currentUser.name)
    const filterFollowers=follow.filter((f)=>f.following===currentUser.name)
    return (
        <div className='container'>

            <div className=" d-flex justify-content-start align-items-center gap-2 my-3">
                <i className="fa-solid fa-circle-user fs-1"></i>
                <div className="d-flex flex-column">
                    <span className='fs-5 fw-bold'>{currentUser.name}</span>
                    <small className="text-muted">{currentUser.email}</small>
                </div>
            </div>
            <div className="ms-5 d-flex justify-content-start gap-3 ">
                <div className="d-flex flex-column">
                    <strong>Posts</strong>
                    <span className='text-center'>{filteredposts.length}</span>
                </div>
                <div className="d-flex flex-column">
                    <strong>Followers</strong>
                    <span className='text-center'>{filterFollowers.length}</span>
                </div>
                <div className="d-flex flex-column">
                    <strong>Following</strong>
                    <span className='text-center'>{filterFollowing.length}</span>
                </div>
            </div>
            
            <br />
            <hr />
            <br />
            <Row className=" m-auto mb-5">

                {
                    filteredposts.length === 0 ? <>
                        <h3 className="text-muted text-center">0 Posts posted by {currentUser.name}</h3>
                    </> :
                        filteredposts.map((item, index) => (
                            <Col md="4" key={item.id}>
                                <div className="p-3 mt-3 shadow-sm rounded">
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fa-solid fa-circle-user fs-1"></i>
                                        <div>

                                            <strong>{item.author}</strong>
                                            <br />
                                            <small className="text-muted">{item.authorMail}</small>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{item.post}</p>
                                    <hr />
                                    <div className="d-flex justify-content-around">
                                        
                                        <i className="fa-solid fa-xmark text-danger" onClick={() => handleDelete(item.id)}></i>
                                        <i className="fa-solid fa-pen text-primary" onClick={()=>handleEdit(item.id)}></i>
                                    </div>
                                </div>
                            </Col>
                        ))}
            </Row>

        </div>
    )
}

export default Profile
