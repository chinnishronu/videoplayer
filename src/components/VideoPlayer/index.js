import {Component} from 'react'
import ReactPlayer from 'react-player'

import Video from '../Video'
import './index.css'

const videoList1 = [
  {
    id: 0,
    title: 'Campfire Embers',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ember', 'Fire', 'Log'],
  },
  {
    id: 1,
    title: 'Shuttle Launch',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/15dc8353-5237-48c7-a021-b498851a844c/mp4/LaunchingOfRocket_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Space', 'Fire', 'Spark'],
  },
  {
    id: 2,
    title: 'Smoke in the forest',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/c85ac563-c092-41d4-938a-c61d2390ff56/mp4/Smoke_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Smoke', 'Tree'],
  },
  {
    id: 3,
    title: 'Cars Drifting',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/e79c0f25-85cf-4ade-b9b6-ef9d2456222b/mp4/CarDriftRacing_Mp4_Avc_Aac_16x9_1280x720p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Car', 'Track', 'Drifting'],
  },
  {
    id: 4,
    title: 'Home Streight',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/88119a33-e117-42d1-9e9b-104dfb7282b9/mp4/Carracing_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Car', 'Racing', 'Track'],
  },
  {
    id: 5,
    title: 'Cycle Race',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/f0e50064-c689-4a2f-9cc4-0ff9e6ddfb81/mp4/Cyclerace1_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Bike', 'Racing', 'Road'],
  },
  {
    id: 6,
    title: 'Ice on the tree',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/d7a6a3fe-85b4-4074-ad40-e29ddca34035/mp4/IceBranches_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Tree', 'Ice', 'Snow'],
  },
  {
    id: 7,
    title: 'Ice on the river',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/ad599d83-471f-42bc-8822-8c5b598cb4e0/mp4/IceFloating_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ice', 'River', 'Snow'],
  },
  {
    id: 8,
    title: 'Glacier Melting',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/debe0e59-f65c-4aeb-8d4e-788d20090825/mp4/IceWater_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ice', 'River'],
  },
]

const updatedData = videoList1.map(eachVideo => ({
  id: eachVideo.id,
  title: eachVideo.title,
  videoUrl: eachVideo.URL,
  tags: eachVideo.tags,
}))

console.log(updatedData)

class VideoPlayer extends Component {
  state = {
    activeId: updatedData[0].id,
    isPlaying: false,
    searchInput: '',
  }

  setActiveVideoId = id => {
    this.setState({
      isPlaying: true,
      activeId: id,
    })
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = updatedData.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {isPlaying, searchInput} = this.state
    const {activeId} = this.state

    const {videoUrl} = updatedData[activeId]
    const searchResults = this.getSearchResults()

    return (
      <div className="video-container">
        <div className="video-list-container">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            placeholder="search"
            onChange={this.onChangeInput}
          />
          <ul className="responsive-container">
            {searchResults.map(eachVideo => (
              <Video
                key={eachVideo.id}
                videoDetails={eachVideo}
                setActiveVideoId={this.setActiveVideoId}
              />
            ))}
          </ul>
        </div>
        <div className="video-player-container">
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    )
  }
}

export default VideoPlayer
