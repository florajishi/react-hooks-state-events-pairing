import React from 'react'

function Video({ videoURL, videoTitle, videoViews, uploadDate }){
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
            <h1>{videoTitle}</h1>
            <span>{videoViews} Views | Uploaded {uploadDate}</span>
        </div>
    )
}

export default Video