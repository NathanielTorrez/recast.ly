import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoCollection: exampleVideoData,
      currentView: exampleVideoData[0]
    };
  }

  // onListItemClick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }

  // After someone clicks
  // Find out how to access different video
  // Change State to a different video

  //PROPS.video
  onVideoClick () {
    this.setState({
      currentView: video
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentView} />
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onVideoClick.bind(this)} videos={this.state.videoCollection}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

