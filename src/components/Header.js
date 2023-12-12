import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_VIDEO_API_SEARCH_SUGGESTIONS } from '../utils/configs'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const [suggestions, setSuggestions] = useState([])

    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector(store=>store.search)

    const dispatch = useDispatch()

   

    useEffect(()=>{
       const timer = setTimeout(() =>{ 
        
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        
        }, 200)

       return () =>{
        clearTimeout(timer)
       }
    },[searchQuery])


    const getSearchSuggestions = async()=>{

        const data = await fetch(YOUTUBE_VIDEO_API_SEARCH_SUGGESTIONS + searchQuery)

        const json = await data.json()

        setSuggestions(json[1])

        dispatch(cacheResults({
            [searchQuery ] : json[1]
        }))
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    
  return (
    <div className='grid grid-flow-col h-16 items-center p-1 mb-2 sticky z-50 top-0 col bg-white'>
        <div className='flex gap-x-2 col-span-1'>
            <div>
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCPeKKh16BRGc_u26mayGXzV228CeLi3K-slQuvZhbRvBwAxvricRQRNV88LDJkc9rJs&usqp=CAU' 
                    alt="menu-icon"
                    className='h-12 cursor-pointer w-12'
                    onClick={toggleMenuHandler}
                />
            </div>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcr5MwmLXm0nqBBRroV5mv8Q3CKlEH770mI7v3sUq7omssX40f_L2cTEJkl93A8GsaxM&usqp=CAU' 
                alt='logo' 
                className='h-12 cursor-pointer w-28'
            />
        </div>
        <div className='relative'>
            <div className='flex justify-center col-span-10 '>
                <input 
                    type='text' 
                    id='' 
                    name='' 
                    className='border-solid border border-gray-400 h-10 mt-2 w-96 p-4 text-slate-950 rounded-l-full cursor-pointer'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onFocus={()=> setShowSuggestions(true)}
                    onBlur={()=> setShowSuggestions(false)}
                /> 
                <button>
                    <i className="fa fa-search h-10 mt-2 p-3.5 bg-gray-300 border border-gray-400 w-16 rounded-r-full  text-xs cursor-pointer" aria-hidden="true"></i>
                </button>
                <div className='bg-gray-300 h-10 w-10 mt-2 rounded-3xl flex items-center justify-center ml-4 cursor-pointer'>
                    <i className="fa fa-microphone h-8 object-contain mt-6" aria-hidden="true"></i>
                </div>
            </div>
            {showSuggestions && <div className='bg-white absolute w-[24rem] left-[4rem] p-3 top-14 rounded-3xl h-auto shadow-slate-800'>
                <ul className='p-1 gap-y-3'>
                    {suggestions.map(s =>
                        <li key={s} className='py-1 flex gap-x-1.5 items-center hover:bg-gray-200 cursor-pointer rounded-2xl'>
                        <i className="fa fa-search p-1"aria-hidden="true"></i>{s}
                    </li>
                    )}                   
                </ul>
            </div>}
        </div>
        <div className='flex justify-center items-center gap-x-10 col-span-1'>
            <i className="fa fa-video-camera mt-6 w-5 h-6 text-slate-500 cursor-pointer" aria-hidden="true"></i>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs3LW8cM3rRMp5w3BwakU3GhtcUJexi3knAflbSSytIyBDbQ9cmal-DSx4g3q_7yBLWY&usqp=CAU"
                alt ="notification"
                className='w-5 h-5 object-contain mt-3 cursor-pointer'  
            />
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU'
                alt="user-icon"
                className='w-8 h-8 mt-3 object-contain cursor-pointer'
            />

        </div>
    </div>
  )
}

export default Header