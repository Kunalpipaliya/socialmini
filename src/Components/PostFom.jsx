import { Height } from "@mui/icons-material";
import React, { useState } from "react";

const PostForm = ({ posts, setPosts }) => {
    const [post, setPost] = useState("");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const addPost = () => {
        if (!post.trim()) return;

        const newPost = {
            id: Date.now(),
            post,
            author: currentUser.name,
            authorid: currentUser.id,
            authorMail: currentUser.email
        };

        setPosts([...posts, newPost]);
        setPost("");
        window.location.href = '/'
    };

    return (
        <div className="d-flex justify-content-center align-items-center " style={{ height: "80vh" }}>

            <div className="w-75 m-auto m-5 p-3 shadow-lg rounded">
                <textarea
                    className="form-control mb-2"
                    placeholder="Write something..."
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                ></textarea>

                <button className="btn btn-primary w-100" onClick={addPost}>
                    Share
                </button>
            </div>
        </div>
    );
};

export default PostForm;
