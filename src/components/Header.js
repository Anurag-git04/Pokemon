import React from 'react'
import { BsBookmarkStar } from "react-icons/bs";

const Header = () => {
  return (
         <div className='flex items-center justify-between mx-5'>
            <h1 className='text-bold text-blue-500 font-extrabold mt-6 '>Pokemon World</h1>
            <div className='flex items-center justify-center'>
                <button className=''>
                    Search
                </button>
                <BsBookmarkStar className='text-3xl text-blue-500' />
            </div>
        </div>
  )
}

export default Header