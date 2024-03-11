
import React from 'react'

const Buttons = ({name}) => {


  return (
    <div className='flex mb-4'>
        <button className='hidden sm:block bg-gray-200 py-2 px-6 sm:py-2 sm:px-3 rounded-md text-xs font-medium flex-col flex-wrap'>{name}</button>
    </div>
  )
}

export default Buttons