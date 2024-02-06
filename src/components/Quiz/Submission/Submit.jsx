import React from 'react'
import lady from '../../Assets/images/lady.png'
import { Circle } from 'rc-progress'
import  img  from '../../Assets/images/cup.png'

const Submit = () => {
  return (
    <div className='bg-[#F0F0FF]'>
        <div className=' flex gap-12 justify-center items-center h-full flex-col lg:flex-row-reverse p-7 overflow-x-hidden overflow-y-scroll'>
        <div className='flex flex-col items-center'>
          <div className='lg:mt-[30px] rounded-lg flex-wrap bg-gradient-to-b flex justify-center items-center from-[#aab7f7] to-[#4941c1] p-3 py-6 lg:py-4 pr-8 text-white font-bold'>
            <img className='w-[200px] lg:w-[150px]' src = {img} alt='/' />
            <div className='border-[3px] border-white px-6  py-10 rounded-full flex flex-col items-center justify-center'>
              <p className='text-xs'>Total</p>
              <h1 className='text-5xl lg:text-4xl font-extrabold'>85%</h1>
              <p className='text-xs'>Scored Out Of 100%</p>
            </div>
          </div>
            <h3 className='text-2xl text-[#564fdc] font-bold py-4'>Congratulations</h3>
            <h3>Category: ReactJS</h3>
            <p className='font-extrabold text-lg py-4'>You Answered</p>
            <h1 className='font-extrabold text-[#564fdc] lg:text-4xl text-5xl py-4'>
                <span>
                    5
                </span>
                <span>
                    /
                </span>
                <span>
                    5
                </span>
            </h1>
            <div className='py-5 flex justify-center flex-wrap gap-4'>
                <button className='p-2 py-4 active:bg-[#564fdc] hover:bg-[#564fdc] rounded-3xl hover:text-white active:text-white font-bold px-5 text-sm text-[#564fdc] border border-[#564fcc]  bg-transparent'>
                    View Correct Answers
                </button>
                <button className='p-2 py-4 active:bg-[#564fdc] hover:bg-[#564fdc] rounded-3xl hover:text-white active:text-white font-bold px-5 text-sm text-[#564fdc] border border-[#564fcc]  bg-transparent'>
                    Back To HomePage
                </button>
            </div>
        </div>
        <img className='w-[300px] h-[500px] translate-y-[-60px] lg:translate-x-[-40px]' src={lady} alt='/' />
    </div>
    </div>
    
  )
}

export default Submit



