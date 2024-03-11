import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/configs'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(()=>{

    getVideos()

  }, [])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
     
    setVideos(json.items)
  }
  return (
    <div className='ml-2 mt-32 flex flex-wrap justify-center sm:justify-start gap-x-4 overflow-y-scroll'>
      {videos.map((video)=>
      <Link key={video.id} to={"/watch?v="+ video.id}>
        <VideoCard info={video}/>
      </Link>
      )}
      
    </div>
  )
}

export default VideoContainer