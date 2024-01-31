import React from 'react'


const VideoCard = ({info}) => {


  return (
    <div className='w-72 object-center gap-y-2  mb-5'>
            <img 
                className='rounded-2xl text-lg'
                src={info?.snippet?.thumbnails?.high?.url} 
                alt='thumbnail'
            />
            <h1 className='font-semibold text-sm mt-2'>{info?.snippet?.title}</h1>
            <p className='text-xs text-gray-600 mt-1'>{info?.snippet?.channelTitle}</p>
            <span><h4 className='text-xs text-gray-600 mt-1'>{(info?.statistics?.viewCount)} views</h4></span>
    </div>
  )
}

export default VideoCard