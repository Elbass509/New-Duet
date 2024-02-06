import React, { useContext, useEffect, useState } from 'react'
import { testQuestions } from '../data'
import QuizTemplate from './QuizTemplate'
import QuizControl from '../Tools/question-navigation/QuizControl'
import { FaArrowAltCircleRight, FaCalculator, FaClock } from 'react-icons/fa'
import { storeAgent } from '../../store/store'
import { Circle } from 'rc-progress'
import '../../index.css'
import Timer from '../Tools/Timer/Timer'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [percent, setPercent] = useState(0)
  const ctx = useContext(storeAgent)

  useEffect(() => {
    
  })
  

  const content = <QuizTemplate Question = { testQuestions } 
                    setCurrentQuestion = {setCurrentQuestion} 
                    currentQuestion = {currentQuestion} 
                    />
//Calculating progress bar percentage
  const percentage = Math.trunc(((currentQuestion  / (testQuestions[0].questions.length )) * 100) + 25)
    
  return (
    <div className='w-[100%] lg:flex lg:flex-row-reverse flex flex-col items-center justify-center mt-[50px] p-2'>
          <div className='lg:w-[30%] w-[94%] flex flex-col items-center justify-center gap-2 lg:mr-4'>
            <div className='flex lg:w-full w-full rounded-lg text-white h-auto p-4  bg-gradient-to-b from-[#aab7f7] to-[#4941c1]' >
              <div className='flex items-center gap-3'>
                <div className='flex flex-wrap gap-2'>
                  <FaClock size = {'45px'} />
                  <Timer />
                </div>
                <button onClick = {ctx.calculatorDisplayHandler}>
                <FaCalculator size = {'45px'} />
                </button>
                <div className=' w-16 h-16 flex relative items-center'>
                  <span className='absolute top-[50%] left-[50%] font-bold text-xl' style={{transform: 'translate(-50%, -50%)'}}>{percentage}<span className='text-xs'>%</span></span>
                  <Circle percent={percentage} trailColor='#aab7f7' strokeWidth={10} strokeLinecap='round' strokeColor={'white'} trailWidth={'8'} />
                </div>
              </div>
            </div>
            <QuizControl Question = { testQuestions } setCurrentQuestion = {setCurrentQuestion} 
              currentQuestion = {currentQuestion} />
          </div>
            {
              ctx.media <= 1023 ? <div className='flex items-center gap-2 p-2'>
                <span className='italic'>Use buttons to navigate to any question</span>
                <span><FaArrowAltCircleRight /></span>
              </div> : ''
              }
          <div className = {`flex flex-1 justify-center ${ctx.media <= 1023 ? 'mt-[30px]' : 'mt-0'}`}>
            { content }
          </div>
    </div>
  )
}

export default Quiz
