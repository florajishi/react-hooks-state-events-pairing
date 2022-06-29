import React from 'react'

function Comments({ key, user, commentTxt}){
    return(
        <div>
            <h3 key={key}>{user}</h3>
            <p key={key}>{commentTxt}</p>
        </div>
    )
}

export default Comments