import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const PostFeed = ({ posts, setPosts, follow, setFollow }) => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem('comments')
        return savedComments ? JSON.parse(savedComments) : []
    })
    const [activeCommentId, setActiveCommentId] = useState(null)

    const [likes, setLikes] = useState(() => {
        const savedLikes = localStorage.getItem('likes')
        return savedLikes ? JSON.parse(savedLikes) : []
    })
    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(likes))
    }, [likes])
    // const handleLike = (id) => {
    //     const updated = posts.map((item) =>
    //         item.id === id
    //             ? { ...item, likes: item.likes + 1 }
    //             : item
    //     );

    //     setPosts(updated);
    // };
    const handleLike = (id) => {
        // const liked = likes.find((l) => l.id === id && l.likedBy === currentUser.name)
        const likeList = {
            id: id,
            likedBy: currentUser.name
        }
        setLikes([...likes, likeList])
    }
    const handleDislike = (id) => {
        const dislike = likes.filter((l) => !(l.id === id && l.likedBy === currentUser.name))
        setLikes(dislike)
    }
    const toggleComment = (id) => {
        setActiveCommentId(activeCommentId === id ? null : id)
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const handleComments = () => {
        if (!comment.trim()) return
        const newComment = {
            id: activeCommentId,
            comment,
            user: currentUser.name
        }
        setComments([...comments, newComment])
        setComment('')

    }

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])
    const handleFollow = (author) => {
        if (currentUser.name === author) return
        const alreadyFollowing = follow.find((f) => f.followedBy === currentUser.name && f.following === author)
        if (alreadyFollowing) {
            alert("you are already following " + author)
        }
        else {

            const newFollow = {
                id: Date.now(),
                followedBy: currentUser.name,
                following: author
            }
            setFollow([...follow, newFollow])
            // alert("follow request sent to "+author)
        }
    }
    const handleUnfollow = (author) => {
        const unfollow = follow.filter((f) => f.following !== author)
        setFollow(unfollow)
    }
    return (
        <Row className=" m-auto mb-5">
            {
                posts.map((item, index) => {
                    const liked = likes.find((l) => l.id === item.id && l.likedBy === currentUser.name)
                    const likedcount = likes.filter((l) => l.id === item.id)
                    const alreadyFollowing = follow.find((f) => f.followedBy === currentUser.name && f.following === item.author)
                    const filteredComments = comments.filter((c) => c.id === item.id)
                    return (

                        <Col md="12" key={index}>
                            <div className="p-3 mt-3 shadow-sm rounded bg-light">
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fa-solid fa-circle-user fs-1"></i>
                                        <div>

                                            <strong>{item.author}</strong>
                                            <br />
                                            <small className="text-muted">{item.authorMail}</small>
                                        </div>
                                    </div>
                                    {alreadyFollowing ? <button className="btn btn-secondary" type="button" onClick={() => handleUnfollow(item.author)}>Following</button> : <button className={currentUser.name === item.author ? "d-none" : "btn btn-primary"} type="button" onClick={() => handleFollow(item.author)}>Follow</button>}
                                </div>
                                <hr />
                                <p>{item.post}</p>
                                <hr />

                                <div className="d-flex justify-content-around align-items-center">

                                    <div className="d-flex gap-2 align-items-center" style={{ cursor: "pointer" }}>
                                        <i className={liked ? "fa-solid text-danger fa-heart" : "fa-regular fa-heart"} onClick={liked ? () => handleDislike(item.id) : () => handleLike(item.id)}  ></i>
                                        <span>{likedcount.length}</span>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center" >

                                        <i className="fa-regular fa-comment" onClick={() => toggleComment(item.id)}></i>
                                        <span>{filteredComments.length}</span>
                                    </div>

                                </div>
                                <div className={activeCommentId === item.id ? "d-block" : "d-none"}>
                                    <strong>Comments</strong>
                                    {
                                        filteredComments.map((item, index) => {
                                            return (
                                                <div key={index}>

                                                    <div className="my-1 d-flex gap-2 align-items-start  bg-white shadow-sm p-3 rounded">
                                                        <i className="fa-solid fa-circle-user fs-1"></i>
                                                        <div className=" d-flex flex-column">
                                                            <strong>{item.user}</strong>
                                                            <span>{item.comment}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="d-flex align-items-center gap-3 mt-2 border border-1 border-secondary rounded p-2">
                                        <input type="text" className="form-control" placeholder="type comment here..." value={comment} onChange={(e) => setComment(e.target.value)} />
                                        <i className="fa-solid fa-paper-plane text-primary" onClick={handleComments}></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row >
    );
};

export default PostFeed;
