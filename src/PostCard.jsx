import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.category}</p>
            <p>{post.content}</p>
        </div>
    )
}

export default PostCard