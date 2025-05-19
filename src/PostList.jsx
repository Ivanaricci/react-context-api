import React from 'react'

// importo l'hook useContext
import { useContext } from 'react'

// importo il contesto che voglio utilizzare
import PostsContext from './Context'

const PostList = () => {

    const posts = useContexts(PostsContext);


    return (
        <div>{posts}</div>


    )
}

export default PostList