import React, {useState} from 'react'

function LikeDislikeBar({ upvotes, downvotes }){

    const [upvotesCount, setUpvotes] = useState({upvotes})

    function handleUpvote(){
        setUpvotes(() => upvotesCount + 1)
    }

    return(
        <div>
            <button onClick={handleUpvote}>{upvotesCount}👍</button>
            <button>{downvotes}👎</button>
        </div>
    )
}

export default LikeDislikeBar