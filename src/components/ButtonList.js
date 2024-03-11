import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {

  const list = ["Music","Soft Rock", "Acostic Guitar","Contemporary Worship Music","Football","Auditions","Blind Auditions", "Ed Sheeran", "Burna Boy", "Live", ]
  return (
    <div className='flex gap-x-2 fixed  bg-white mt-16'>
      <div className='hidden sm:block mr-2 mt-1 cursor-pointer'>
        <i className="fa fa-angle-left " 
          aria-hidden="true">
        </i>
      </div >
      <div className='flex overflow-x-scroll'>
      {list.map((buttons, index)=>(
        <Buttons 
          key={index} 
          name={buttons}

        />
      ))}
      </div>
      <div className='hidden sm:block mr-2 mt-1 cursor-pointer'>
        <i className="fa fa-angle-right" 
          aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default ButtonList