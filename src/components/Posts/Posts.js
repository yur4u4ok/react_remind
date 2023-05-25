import {useEffect, useState} from "react";
import {userService} from "../../services";
import {Post} from "../Post/Post";


const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getPostsByUserId(userId).then(value => value.data).then(value => setPosts([...value]))
    },[userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export {
    Posts
}
