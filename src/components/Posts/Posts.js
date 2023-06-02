import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts, loading} = useSelector(state => state.postReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [dispatch])

    return (
        <div>
            {loading && <h1>LOADING.......</h1>}
            <h2><b>All Posts</b></h2>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export {
    Posts
}
