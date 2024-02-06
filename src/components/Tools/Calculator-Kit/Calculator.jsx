import React, { useContext, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaTimesCircle } from 'react-icons/fa'
import '../../../index.css'
import { storeAgent } from '../../../store/store'

const Calculator = () => {
 const [display, setDisplay] = useState('')
 const ctx  = useContext(storeAgent)
 const [initialP, setInitialP] = useState({x: 'auto', y: 'auto'})
const [position, setPosition] = useState({x: 'auto', y: 'auto'})
const [isDraging, setIsDraging] = useState(false)
const calcRef = useRef(null)

const handleMouseDown = (e) => {
    setIsDraging(true)
    const mouseX = e.clientX 
    const mouseY = e.clientY 
     const elementX = calcRef.current.getBoundingClientRect().x
     const elementY = calcRef.current.getBoundingClientRect().y 
    setInitialP({x: mouseX - elementX, y: mouseY - elementY})

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseUp', handleMouseUp)

}
const handleMouseMove = (e) => {
    if(isDraging){
        const mouseX = e.clientX 
        const mouseY = e.clientY 
        const newX = mouseX - initialP.x
        const newY = mouseY - initialP.y
        setInitialP({x: newX, y: newY})
    }
}
const handleMouseUp = (e) => {
    setIsDraging(false)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseUp', handleMouseUp)
}

 const updateDisplay = (e) => {
    e.preventDefault()
    setDisplay(prev => {
        const val = e.target.value
        const newDisplay = `${prev}${val}`
        return newDisplay
    })
 }
 
 const clearDisplay = (e) => {
    e.preventDefault()
    setDisplay('')
 }
 const deleteLatestDigit = (e) => {
    e.preventDefault()
    setDisplay(prev => {
        const newDisplay = prev.toString().slice(0, -1)
        return newDisplay
    })
 }
 const solve = (e) => {
    e.preventDefault()
    setDisplay(currenVal => {
        const answer = eval(currenVal)
        return answer
    })
 }

  return (
    <div className='w-screen fixed z-10 lg:z-0 flex flex-col justify-center overflow-x-hidden overflow-y-scroll items-center h-screen bg-black bg-opacity-[0.5]'>
     <div draggable 
        onMouseDown = {handleMouseDown} style={{top: `${initialP.y}px`, left: `${initialP.x}px`, userSelect: 'none'}}
        ref={calcRef}
        className='lg:w-[25%] z-50 w-[100%] bg-[#e2e8fd] rounded-t-[50px] lg:rounded-none  lg:bg-transparent h-[80%] fixed flex flex-col justify-center items-center mt-[50px]' >
        {
            ctx.media <= '1023' ? <button onClick = {ctx.calculatorDisplayHandler}
                 className='self-start text-[#564fdc] ml-[10%] my-3 translate-y-[-100%] font-extrabold border-[3px] rounded-full px-5 py-5 border-[#564fdc]'>
                <FaArrowLeft />
            </button> :
            <button className='self-end py-2 px-2 font-extrabold text-white' onClick = {ctx.calculatorDisplayHandler}>
            <FaTimesCircle size={'18px'} />
            </button>
        }
        <form id='calculator' 
            className='z-30 flex flex-col  lg:w-[100%] w-[70%] max-w-[450px] rounded-lg bg-[#111] p-4'>
            <input className='p-4 rounded-md text-white font-bold text-3xl bg-green-950' value = {display} placeholder='0' type='text' disabled/>
            <div className='w-full  p-1'>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button onClick = {updateDisplay} className='btn' value = {'sin'}>
                        sin
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'cos'}>
                        cos
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'tan'}>
                        tan
                    </button>
                    <button onClick = {clearDisplay} className='btn spec'>
                        AC
                    </button>
                </div>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button onClick = {updateDisplay} className='btn' value = {'1'}>
                        1
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'2'}>
                        2
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'3'}>
                        3
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'+'}>
                        +
                    </button>
                </div>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button onClick = {updateDisplay} className='btn' value = {'4'}>
                        4
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'5'}>
                        5
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'6'}>
                        6
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'-'}>
                        -
                    </button>
                </div>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button onClick = {updateDisplay} className='btn' value = {'7'}>
                        7
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'8'}>
                        8
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'9'}>
                        9
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'*'}>
                        x
                    </button>
                </div>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button onClick = {updateDisplay} className='btn' value = {'.'}>
                        .
                    </button>
                    <button onClick = {updateDisplay} className='btn' value = {'0'}>
                        0
                    </button>
                    <button className='btn danger' onClick = {deleteLatestDigit}>
                        DEL
                    </button>
                    <button onClick = {updateDisplay} className='btn evaluate' value = {'/'}>
                        /
                    </button>
                </div>
                <div className='flex w-full justify-center gap-[5%] my-2'>
                    <button className='btn evaluate last my-3' onClick = {solve}>
                        =
                    </button>
                </div>
                
            </div>
        </form>     
     </div>
    
    </div>
  )
}

export default Calculator
