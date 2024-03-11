import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { Link, useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChats from './LiveChats'

const WatchPage = () => {
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='px-8 pt-5 mt-14 '>
      <Link to="/"><div className='sm:hidden flex justify-center'>
        <button className=' w-screen mb-3 bg-gray-400 rounded-lg '>Go Back To Home</button>
      </div></Link>
      
      <div className='flex flex-col  sm:flex gap-10 gap-x-12 w-auto'>
        <div className='flex items-center justify-start w-96'>
          <iframe 
          className='rounded-xl w-96 h-60 sm:w-96 '
                width="300" 
                height="200" 
                src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
        <div className='w-[20rem]'>
          <LiveChats />
        </div>
      </div>
        <CommentsContainer />
    </div>
  )
}

export default WatchPage