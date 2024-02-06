import React, { useContext } from 'react'
import { FaAngleDown, FaAngleUp, FaBars, FaSignOutAlt, FaTimes } from 'react-icons/fa'
import quizicon from '../Assets/images/quizicon.png'
import user from '../Assets/images/user.jpg'
import { storeAgent } from '../../store/store'
import Card from './Card'

//Overlay

export const Overlay = (props) => {
  return <div className='w-screen fixed z-10 top-0 h-screen bg-black bg-opacity-5' onClick={props.menuToggler}></div>
}
//Creating the dropdowns for the navbar
export const DropDown = (props) => {
    return(
        <Card className=' fixed right-0 lg:right-0 md:w-[30%] w-[70%] z-20 shadow-lg bg-white h-screen p-8'>
          <div className='h-[80%] w-1/1 mt-[50px] flex flex-col gap-3 p-2 '>
            <h3 className='my-4 font-bold text-md'>Hello, Lucky</h3>
              <div className='w-1/1'>
                  <label className='block text-xs text-slate-500'>Email</label>
                  <p  className=' w-[1/1] pt-3 text-sm cursor-pointer rounded-md my-2'>elliotlucky509@gmail.com</p>
              </div>
              <div className='w-[1/1]  py-3 text-sm cursor-pointer rounded-md my-2'>
                  <label >Verified</label>
                  <span className='mx-3 text-[#564fdc] text-xs border border-[#564fdc] p-1 rounded-md '>Yes</span>
              </div>
              <button onClick = {props.menuToggler} className='flex active:border active:text-white gap-3  active:bg-[#7f8af0] px-2 rounded-md  items-center text-left text-sm group hover:bg-slate-100 py-3 cursor-pointer my-2'>
                <span className= ' text-center  rounded-full'><FaSignOutAlt size = { '20px' }/></span>
                <span>Logout</span>
              </button>
          </div>
        </Card>
    )
}


const Nav = (props) => {
const ctx = useContext(storeAgent)

  return (
    <div>
      <nav className='flex bg-white top-0 items-center justify-between md:shadow-none w-screen shadow-sm p-2'>
        <div  className='flex gap-2 items-center ml-6 text-lg font-bold'>
          <img className=' w-12' src = {quizicon} alt='icon'/>
          <span>QuizLead</span>
        </div>
        { 
         ctx.media <= '1023' ? <button onClick = {props.menuToggler} className='pr-4'>
          { props.menuDisplayed ? <FaTimes /> : <FaBars /> }
         </button> :
          <div className='flex gap-2 items-center mr-6 text-md font-semibold cursor-pointer' 
            onClick={props.menuToggler}>
            <img className=' w-9 h-9 rounded-full ' src = {user} alt='user' />
            <div className='flex items-center gap-2'>
              <span>Lucky Developer</span>
              <span className=' mx-2'>
                { props.menuDisplayed ? <FaAngleUp /> : <FaAngleDown /> }
              </span>
            </div>
          </div> 
        }
        
      </nav>
      
      </div>
  )
}


export default Nav
