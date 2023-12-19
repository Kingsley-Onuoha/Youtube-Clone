import React from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'

const LiveChats = () => {

    const dispatch = useDispatch()

    const newChatMessages = useSelector((store)=>store.chat.messages)

    
    dispatch(addMessages({
        name:'Akshay Saini',
        message: "lorem ipson"
    }))

  return (
    <div className='p-1 border border-gray-300 w-auto h-[27rem] bg-gray-100 rounded-lg '>
        {newChatMessages.map((c, i)=>(
        <ChatMessages 
          key={i}
          name={c.name} 
          message={c.message}
        />))   
        }
    </div>
  )
}

export default LiveChats