import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {

    const dispatch = useDispatch()

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
                    className='h-12 cursor-pointer'
                    onClick={toggleMenuHandler}
                />
            </div>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcr5MwmLXm0nqBBRroV5mv8Q3CKlEH770mI7v3sUq7omssX40f_L2cTEJkl93A8GsaxM&usqp=CAU' 
                alt='logo' 
                className='h-12 cursor-pointer'
            />
        </div>
        <div className='flex justify-center col-span-10'>
           <input 
                type='text' 
                id='' 
                name='' 
                className='border-solid border border-gray-400 h-10 mt-2 w-96 p-4 text-slate-950 rounded-l-full cursor-pointer'
                placeholder='Search'
            /> 
            <button>
                <i className="fa fa-search h-10 mt-2 p-3.5 bg-gray-300 border border-gray-400 w-16 rounded-r-full  text-xs cursor-pointer" aria-hidden="true"></i>
            </button>
            <div className='bg-gray-300 h-10 w-10 mt-2 rounded-3xl flex items-center justify-center ml-4 cursor-pointer'>
                <i className="fa fa-microphone h-8 object-contain mt-6" aria-hidden="true"></i>
            </div>
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