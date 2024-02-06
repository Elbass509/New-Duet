import React, { useContext, useState } from 'react'
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import { storeAgent } from '../../store/store'


const QuizTemplate = (props) => {
    //setting answer state and mechanism
    const [answerIndex, setAnswerIndex] = useState(() => {
        const storedAnswer = localStorage.getItem('selected')
        return storedAnswer ? JSON.parse(storedAnswer) : []
    })
    const [scoreIndx, setScoreIndx] = useState([])
    // iintializing user scores using 
    const { score, setScore } = useContext(storeAgent)


    const currentQuestion = props.currentQuestion
    const correctAnswer = props.Question[0].questions[currentQuestion].correctAnswer
    const setCurrentQuestion = props.setCurrentQuestion

    
    //Trying to dynamically render question display and change functionallity
    const options = props.Question[0].questions[currentQuestion].choices
    const questionId = props.Question[0].questions[currentQuestion].id 
        //Hnadling answer change
    const answerHandler = (answer) => {
        //Before Setting answer we have to check if the question has not been answered b4
        //checking if answer was set choosen
        setAnswerIndex(prevSelectedAnswers => {
            return {
                ...prevSelectedAnswers,
                [questionId]: answer
            }
        })
        if(!answerIndex[questionId]){
                setScore(prevScore => prevScore + 1)
        }else{
                setScore(prevScore => prevScore - 1)
        }
            
            console.log(score);
            localStorage.setItem('selected', JSON.stringify(answerIndex))
    }

    //Handling questions next and preview
    const showNextQuestion = (e) => {
        e.preventDefault()
        currentQuestion < props.Question[0].questions.length - 1 ? setCurrentQuestion(prev => prev += 1) 
        : setCurrentQuestion(props.Question[0].questions.length - 1)
    }

    const showPreviousQuestion = (e) => {
        e.preventDefault()
        currentQuestion > 0 ? setCurrentQuestion(prev => prev -= 1) : setCurrentQuestion(0)
    }
    
    //just preparing the ui with an object
  return (
    <div className='flex flex-col items-center px-2'>
        <div className='mt-3 mb-7 flex flex-col justify-center items-center text-[#564fdc]'>
            <h2 className='text-black lg:text-md text-xl'>Category: React Js</h2>
            <div className='flex text-3xl'>
                <span className='font-bold'>{currentQuestion + 1}</span>
                <span className='font-bold'>/</span>
                <span className='font-bold'>{props.Question[0].questions.length}</span>
            </div>
            <h1 
            className='lg:text-xl text-2xl text-center font-bold px-3 mt-3 mb-7 text-black'>
                { props.Question[0].questions[currentQuestion].question }
            </h1>
        </div>
        
        <ul key = {props.Question[0].questions[currentQuestion].id} className='w-1/1 flex md:gap-8 justify-center items-center flex-wrap'>
            {
                Object.entries(options).map(([index, answer]) => {
                return <li  key = { answer } onClick = {() => {
                                answerHandler(answer)
                            }} 
                            className={`${answerIndex[questionId] === answer ? 'bg-gradient-to-l from-[#aab7f7] to-[#4941c1] text-white' : 'bg-transparent'}
                                cursor-pointer md:mt-0 mt-5 flex gap-2 hover:bg-[#aab7f7]
                                text-[#564fdc] self-center rounded-md border-[#564fdc] 
                                items-center lg:w-[45%] w-[95%] border px-3 py-3 `}>
                                {answerIndex[questionId] === answer ? <FaCheckCircle /> : <FaRegCircle />}
                            <span>{ answer }</span>
                        </li>
              } )
            }
        </ul>  
        <div className='flex items-center w-full text-white gap-4 my-8 justify-center'>
            {currentQuestion === 0 ? null :  <button 
                onClick = { showPreviousQuestion } 
                className='px-8 py-3 rounded-md active:translate-y-[-3px] bg-[#564fdc] active:bg[#564fdc] hover:bg[#564fdc]'>
                Previous
            </button>}
            <button
                onClick = { showNextQuestion } 
                className='px-8 py-3 rounded-md active:translate-y-[-3px] bg-[#564fdc] active:bg[#564fdc] hover:bg[#564fdc]'>
                Next
            </button>
        </div>
    </div>
  )
}

export default QuizTemplate