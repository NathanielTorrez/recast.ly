import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoCollection: [],
      currentVideo: null
    };
  }
  componentDidMount() {
    this.getYoutubeVideos('cute kittens');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYoutube(options, (videos) =>
      this.setState({
        videoCollection: videos,
        currentVideo: videos[0]
      })
    );
  }

  //PROPS.video
  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search handleSearchInputChange={this.getYoutubeVideos.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList titleClickHolder={this.onVideoClick.bind(this)} videos={this.state.videoCollection}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

