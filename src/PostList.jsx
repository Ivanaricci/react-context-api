import React from 'react'

// importo l'hook useContext
import { useContext } from 'react'

// importo il contesto che voglio utilizzare
import PostsContext from './Context'
import PostCard from './PostCard';

const PostList = () => {

    // recupero i post dal context
    const posts = useContexts(PostsContext);


    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>


    )
}

export default PostList