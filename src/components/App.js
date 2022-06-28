import React, {useState} from 'react'
import video from "../data/video.js";
import CommentSection from "./CommentSection.js";
import LikeDislikeBar from "./LikeDislikeBar.js";
import Video from "./Video.js";

function App() {
  return (
    <div className="App">
      <Video 
        videoURL={video.embedUrl}
        videoTitle={video.title}
        videoViews={video.views}
        uploadDate={video.createdAt}
      />
      <LikeDislikeBar
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <CommentSection
        comments={video.comments}
      />
    </div>
  );
}

export default App;