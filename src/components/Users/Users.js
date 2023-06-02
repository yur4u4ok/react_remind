import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux";
import {User} from "../User/User";
import {Post} from "../Post/Post";

const Users = () => {
    const {users, loading, selectedUser, postsById} = useSelector(state => state.userReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.getAllUsers())
    }, [dispatch])

    return (
        <div>
            <h2>Posts by selected user</h2>
            {postsById.map(post => <Post key={post.id} post={post}/>)}
            <p>-------------------------------------------</p>
            {selectedUser && <h3><b>{selectedUser.name}</b></h3>}
            {loading && <h1>LOADING.......</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
            <p>-------------------------------------------</p>
        </div>
    )
}

export {
    Users
}
