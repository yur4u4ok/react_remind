import css from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <Link to={`${postId}`}>
            <div className={css.Comment}>
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>email: {email}</div>
                <div>name: {name}</div>
                <div>body: {body}</div>
            </div>
        </Link>
    )
}

export {
    Comment
}
