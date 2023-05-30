import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../../components";

const PostDetail = () => {
    const {postId} = useParams()

    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    },[postId])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    )
}

export {
    PostDetail
}
