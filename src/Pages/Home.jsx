import React, { useState } from 'react'
import PostFom from '../Components/PostFom'
import PostFeed from '../Components/PostFeed'
import { useEffect } from 'react'
const Home = () => {
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem("posts");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);
    const [postform, setPostform] = useState(false)
    return (
        <div>
            
        </div>
    )
}

export default Home
