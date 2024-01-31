import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomNames, makeRandomMessage } from '../utils/helper'
import { useState } from 'react'

const LiveChats = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch()

    const chatMessages = useSelector((store)=>store.chat.messages)

    useEffect(()=>{

      const i = setInterval((i) =>{

        dispatch(
          addMessages({
            name: generateRandomNames(),
            message: makeRandomMessage(20)
        }))
    
      }, 2000)

      return ()=> clearInterval(i)
    }, [])
    
  return (
    <>
      <div className='flex flex-col-reverse p-1 border border-gray-300 w-auto h-[27rem] bg-gray-100 rounded-lg overflow-y-scroll'>
            {chatMessages.map((c, i)=>(
            <ChatMessages 
              key={i}
              name={c.name} 
              message={c.message}
            />))   
            }
      </div>
        <form 
          onSubmit={(e)=>{
            e.preventDefault()
            dispatch(
              addMessages({
                name: "Kingsley Onuoha",
                message: liveMessage
            }))

            setLiveMessage("")
          }} 
          className='w-auto p-1 mt-2 flex gap-x-2 '
          >
          <input 
            className='w-80 border border-gray-800 rounded-lg px-1'
            type='text'
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button type='submit' className='bg-black text-white text-sm p-1 rounded-lg'>
            send
          </button>
        </form>
    </>
  )
}

export default LiveChats