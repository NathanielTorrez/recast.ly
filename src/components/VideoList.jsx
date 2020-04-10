import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, titleClickHolder}) => (

  <div className="video-list">
    {videos.map((video) =>
      <VideoListEntry key={video.etag} video={video} titleClickHolder={titleClickHolder} />)}
  </div>
);


VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;