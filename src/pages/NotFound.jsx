import React from 'react'
import errImg from '../components/Assets/images/error.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <img className='w-1/2' src = {errImg} alt='Oopps' />
      <div className='w-1/2 flex flex-col items-center'>
        <h2 className='text-3xl text-color font-extrabold text-center'>Page Not Found</h2>
        <div className='my-5'>
            <span>Try checking the URL you entered again</span>
            <Link to={'/'}>
                <button className='mx-3 p-2 rounded-lg bg-[#7f8af0]'>Back To Login</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
