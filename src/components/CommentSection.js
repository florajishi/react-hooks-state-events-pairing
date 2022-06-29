import React from 'react'
import Comments from './Comments'

function CommentSection({ comments }){
    const commentSection = comments.map(comment => {
        return(
            <Comments
                key={comment.id}
                user={comment.user}
                commentTxt={comment.comment}
            />
        )
    })
    return(
        <div>
            <h1>{comments.length} Comments</h1>
            {commentSection}
        </div>
    )
}

export default CommentSection