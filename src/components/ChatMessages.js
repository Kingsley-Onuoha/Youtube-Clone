import React from 'react'
import { useEffect } from 'react';




const ChatMessages = ({name, message}) => {

    useEffect(()=>{
        const i = setInterval(() => {
          console.log("API POLLING")  
        }, 2000);
        return ()=> clearInterval(i)
    }, [])

  return (
    <div className='flex tems-center gap-3 shadow-sm p-1'>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU'
            alt="user-icon"
            className='w-5 h-5 mt-5 object-contain cursor-pointer'
        />
        <span className='mt-4 text-sm font-bold'>{name}</span>
        <span className='mt-4 text-xs'>{message}</span>
    </div>
  )
}

export default ChatMessages