import video from "../data/video.js";
import CommentSection from "./CommentSection.js";
import LikeDislikeBar from "./LikeDislikeBar.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video 
        videoURL={video.embedUrl}
        videoTitle={video.title}
        videoViews={video.views}
        uploadDate={video.createdAt}
      />
    </div>
  );
}

export default App;
