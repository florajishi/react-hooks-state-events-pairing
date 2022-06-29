import React, {useState} from 'react'

function LikeDislikeBar({ upvotes, downvotes }){

    const [upvotesCount, setUpvotes] = useState(upvotes)
    const [downvotesCount, setDownvotes] = useState(downvotes)

    function handleUpvote(){
        setUpvotes(upvotesCount => upvotesCount + 1)
    }

    function handleDownvote(){
        setDownvotes(downvotesCount => downvotesCount + 1)
    }

    return(
        <div>
            <button onClick={handleUpvote}>{upvotesCount}👍</button>
            <button onClick={handleDownvote}>{downvotesCount}👎</button>
        </div>
    )
}

export default LikeDislikeBar