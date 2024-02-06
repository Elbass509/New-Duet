import React from 'react'
import { FaJs } from 'react-icons/fa'

const CourseCard = (props) => {
  return (
    <button value = {'props.value'} onClick = {props.onclick} style={{transitionDelay: '.2s', backgroundColor: `${props.color}`}}
         className='hover:scale-[1.05] flex flex-col md:flex-row justify-center items-center cursor-pointer 
            text-center my-[20px] rounded-t-2xl rounded-b-md text-white flex-wrap px-3 py-7 
            cusor-pointer  w-[70%] md:w-[20%]'
            >
            {props.icon}
          <div>
            <h3 className='py-3 font-bold'>{props.value}</h3>
            <p className='text-xs'>
              {props.description}
            </p>
          </div>
    </button>
  )
}

export default CourseCard
