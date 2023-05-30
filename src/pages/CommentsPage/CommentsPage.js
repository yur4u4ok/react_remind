import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments([...value]))
    }, [])


    return (
        <div>
            <Outlet/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}

export {
    CommentsPage
}
