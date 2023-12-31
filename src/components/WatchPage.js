import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChats from './LiveChats'

const WatchPage = () => {
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='px-8 pt-5 '>
      <div className='flex gap-10'>
        <div>
          <iframe 
          className='rounded-2xl'
                width="730" 
                height="430" 
                src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
        <div className='w-full'>
          <LiveChats />
        </div>
      </div>
        <CommentsContainer />
    </div>
  )
}

export default WatchPage