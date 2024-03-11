import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-6 px-6 justify-center items-center'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer