import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {

  const list = ["Music","Soft Rock", "Acostic Guitar","Contemporary Worship Music","Auditions","Blind Auditions", "Ed Sheeran", "Burna Boy", "Live", ]
  return (
    <div className='flex gap-x-2'>
      <div className='mr-2 mt-1 cursor-pointer'>
        <i className="fa fa-angle-left " 
          aria-hidden="true">
        </i>
      </div>
      {list.map((buttons, index)=>(
        <Buttons 
          key={index} 
          name={buttons}
        />
      ))}
      <div className='mr-2 mt-1 cursor-pointer'>
        <i className="fa fa-angle-right" 
          aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default ButtonList