import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen )return null

    return(
    <div className=' w-48 text-xs sm:grid col-span-1 sm:w-72 shadow-md mb-3 p-2 h-screen bg-white mt-14 overflow-y-scroll hidden'>
        <div className='border-gray-300 border-b-2'>
          <div className='flex gap-y-2 gap-x-6 items-center ml-3 mr-3 rounded-lg p-4 justify-start w-auto h-3       border bg-gray-100 text-sm font-medium cursor-pointer'>
            <i className="fa fa-home" aria-hidden="true"></i>
            <Link to="/"><h2>Home</h2></Link>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3 hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDm19Dr7kiDZnqgGxLvhf3zbUwryzHL2yEbgXxB-PyYclwwGaNvntCfxmc6wtwHyMEUA&usqp=CAU' 
              alt='short'
            />
            <h2>Shorts</h2>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 mb-4 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HEhCPB4CdxvehU1B_Z4jzOZJRsIBoNX5KnTL6AdgRMre4IrTJ8KgyLSkv_XfZTf3CZg&usqp=CAU'
              alt='subscription'
            />
            <h2>Subscriptions</h2>
          </div>
        </div>    
        <div className='border-gray-300 border-b-2'>
          <div className='flex gap-x-4 p-2 ml-5 mr-4 mt-2 hover:bg-gray-100 text-sm font-bold cursor-pointer rounded-lg  justify-start'>
              <h1>You</h1>
              <img 
                className='w-4'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6WAJ0Q9BuWux9jpHKdUZSd1IyKwHbABwOPMYkE4E1lxmTs9i9lqA--W2gEYDydOOXoM&usqp=CAU'
                alt='arrow'
              />
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3 hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWdyYhRPGhQpow8vozA-fqv4AL86DWANRr43W58jm-EfOlJZTvRLcBXRy0SCl6qGMqfc&usqp=CAU' 
              alt='short'
            />
            <h2>Your Channel</h2>
          </div>
          <div className='flex gap-y-2 gap-x-6 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQKBpQOascXfVkW4ceHkX-ip82NKf_Rz2bWl3g_nCPZEk9b564PO_2XLF_4gVAPYdP20&usqp=CAU'
              alt='history'
            />
            <h2>History</h2>
          </div>
          <div className='flex gap-y-2 gap-x-6 items-center ml-2 mr-3  rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQa-LY0SSjRQQ1Ce9bKNmD136UvzhPgdMfGheS9GvKIV8Tr8c4RaSeLgri3ukbuAJAII&usqp=CAU'
              alt='subscription'
            />
            <h2>Your videos</h2>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiXI_Ecsm07aBI2wWhripDo94xDvIUZZaA73_tjJ_yPIuhttpQHo-KQOiMU4Zub8qj0Q&usqp=CAU'
              alt='subscription'
            />
            <h2>Watch later</h2>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 mb-4 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59PL_20MFLl77H55wTPm1gvochRivTZisqimQmDPOEoKjP4LIYVoNiXHuE_QRMx6-VSQ&usqp=CAU'
              alt='subscription'
            />
            <h2>Liked videos</h2>
          </div>
        </div>   
        <div className='border-gray-300 border-b-2'>
          <div className='flex gap-x-4 p-2 ml-5 mr-4 mt-2 hover:bg-gray-100 text-sm font-bold cursor-pointer rounded-lg  justify-start'>
              <h1>Subscriptions</h1>

          </div>
          <div className='flex gap-y-2 gap-x-4 items-center ml-2 mr-2 mb-3 rounded-lg p-4 justify-start w-auto h-3 hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhdScMIZblqlDbsb98qjkAdDC48evUlIBlHSzN0bdTWD-u_6WXCjLwS83ynlTWZjtl9c&usqp=CAU' 
              alt='short'
            />
            <h2>Browse Channels</h2>
          </div>
        </div> 
        <div className='border-gray-300 border-b-2'>
          <div className='flex gap-x-4 p-2 ml-5 mr-4 mt-2 hover:bg-gray-100 text-sm font-bold cursor-pointer rounded-lg  justify-start'>
              <h1>Explore</h1>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3 hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxbs6MuQAEIfUZemk9HMbzFSQKHX3f91eD3RBWyDarfFvaMYvMSENrGMcaD5LuYuTQj4&usqp=CAU' 
              alt='short'
            />
            <h2>Trending</h2>
          </div>
          <div className='flex gap-y-2 gap-x-6 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTsQnJPfbZpBZHeb-5wJGodljjBueUk_UAzGomgp6Q9oW93dAkYTUaPJGniauTV7oGaw&usqp=CAU'
              alt='history'
            />
            <h2>Music</h2>
          </div>
          <div className='flex gap-y-2 gap-x-6 items-center ml-2 mr-3  rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cMvPvL_zbxcnVmUH9z0rrGGWuwxyh_i_A8qScjR4SKqeKJbzg8sKMjazi4LpDSXUGyc&usqp=CAU'
              alt='subscription'
            />
            <h2>Gaming</h2>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX04Kn7yehMXCdG65ljJe1G9XZ5uAdyvZBGBCVH0K-kjZ-hEjA1HY47MC7zfNJEIrndKA&usqp=CAU'
              alt='subscription'
            />
            <h2>News</h2>
          </div>
          <div className='flex gap-y-2 gap-x-5 items-center ml-2 mr-3 mb-4 rounded-lg p-4 justify-start w-auto h-3       hover:bg-gray-100 text-sm font-medium cursor-pointer'>
            <img 
              className='w-5'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W-WC8mBkaS5BilT2dxzEk8ZFYjrkLRMMnSgdvw7xxph7senwFUrYrb2s6h4wF-2osk4&usqp=CAU'
              alt='subscription'
            />
            <h2>Sport</h2>
          </div>
        </div>    
    </div>
  )
}

export default SideBar