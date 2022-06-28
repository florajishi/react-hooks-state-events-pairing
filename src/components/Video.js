import React from 'react'

function Video({ videoURL }){
    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={videoURL}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
        </div>
    )
}

export default Video