import React, { useContext, useEffect, useState } from 'react'
import { FaReact, FaCode, FaJs } from 'react-icons/fa'
import { URL } from '../components/Assets/avm'
import { storeAgent } from '../store/store'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import CourseCard from '../components/UI/CourseCard'

const SelectCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState('')
  const [fetchedQuestions, setFetchQuestions] = useState([])
  // const ctx = useContext(storeAgent)
  // const manageCourseSelection = (e) => {
  //   e.preventDefault()
  //   setSelectedCourse(e.target.value)
  // }
  const availableCourseArray = [
    {
      id: 't1',
      color: '#863EFF',
      icon: <FaReact size = {60} className='py-3' />,
      value: 'React Js',
      desc: 'Cupidatat pariatur nulla non nisi magna. Enim tempor non Lorem ad eu fugiat.',
      test: 'React'
    },
    {
      id: 't2',
      color: '#FF6332',
      icon: <FaCode size = {60} className='py-3' />,
      value: 'HTML',
      desc: 'Cupidatat pariatur nulla non nisi magna. Enim tempor non Lorem ad eu fugiat.',
      test: 'Code'
    },
    {
      id: 't3',
      color: '#4AAF47',
      icon: <FaJs size = {60} className='py-3' />,
      value: 'Javascript',
      desc: 'Cupidatat pariatur nulla non nisi magna. Enim tempor non Lorem ad eu fugiat.',
      test: 'Js'
    },
  ]
 //REquesting a particular collection
  const questionsCollection = collection(db, 'quiz')


// initialling a useEffcet funtion that will handle question fetch when a new course is selected
    useEffect(() => {
      const fetchHandler = async() =>{
        const fetchQuestions = await getDocs(questionsCollection)
        setFetchQuestions(fetchQuestions)
        console.log(fetchedQuestions);

        console.log(fetchQuestions);
      }
      fetchHandler()
    })


  return (
    <div className='w-[100%] bg-[#F0F0FF] flex flex-col items-center'>
      <main className='flex flex-col items-center bg-transparent h-full lg:w-full w-[95%] p-3 mt-[40px]'>
      <section className='font-semi text-2xl md:text-[18px] text-center px-5 text-slate-950 flex flex-col items-center'>
        <span className='bg-[#564fdc] px-4 py-2 rounded-md text-white mb-4 w-1/1'>INSTRUCTION</span>
        <p className='mb-4'>Choose The Correct option for each of the following Question Displayed</p>
        <p className='italic text-md'>Select A Test to start</p>
      </section>
      <section className='flex p-3 gap-3 w-screen flex-wrap justify-center items-center'>
        {
          availableCourseArray.map(test => (
            <CourseCard 
              icon = {test.icon}
              value = {test.value}
              test = {test.test}
              description = {test.desc}
              color = { test.color }
            />
          ))
        }
      </section>
      <button className='bg-[#564fdc] px-10 py-3 mb-8 rounded-3xl text-white font-semibold'>
        Start Quiz
      </button>
    </main>
    </div>
    
  )
}

export default SelectCourse
