import React from 'react'

function Comments({ id, user, commentTxt}){
    return(
        <div>
            <h3 key={id}>{user}</h3>
            <p key={id}>{commentTxt}</p>
        </div>
    )
}

export default Comments