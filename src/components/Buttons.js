
import React from 'react'

const Buttons = ({name}) => {


  return (
    <div className='flex mb-4'>
        <button className='bg-gray-200 py-2  px-3 rounded-md text-xs font-medium'>{name}</button>
    </div>
  )
}

export default Buttons