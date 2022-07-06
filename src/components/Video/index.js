import ReactPlayer from 'react-player'

import './index.css'

const Video = props => {
  const {videoDetails, setActiveVideoId} = props
  const {videoUrl, id} = videoDetails

  const onClickVideo = () => {
    setActiveVideoId(id)
  }

  return (
    <li className="each-video-container">
      <button type="button" onClick={onClickVideo} className="btn">
        <ReactPlayer url={videoUrl} width="" height="3%" />
      </button>
    </li>
  )
}

export default Video
