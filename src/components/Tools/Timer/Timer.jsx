import { useState, useEffect } from "react"

const Timer = () => {
    const [time, setTime] = useState(() => {
        const storedTime = localStorage.getItem('timer')
        return storedTime ? JSON.parse(storedTime) : 
        {
            hours: 0,
            minutes: 5,
            seconds: 0
        }})
        const [danger, setDanger] = useState(false)
    useEffect(() => {
        const updateTime = setInterval(() => {
            if(time.hours === 0 && time.minutes === 0 && time.seconds === 0){
                clearInterval(updateTime)
                localStorage.removeItem('timer')
            }else{
                let newTime = {}

                setTime((prevTime) => {
                  newTime = { ...prevTime }
                    if(newTime.seconds > 0){
                        newTime.seconds--
                    }else{
                        if(newTime.minutes > 0){
                            newTime.minutes--
                            newTime.seconds = 59
                        }else{
                            newTime.hours--
                            newTime.minutes = 59
                            newTime.seconds = 59
                        }
                    }
                    const closeToExpiry = (newTime.hours * 3600 ) + (newTime.minutes * 60) + (newTime.seconds)
                    if (closeToExpiry <= 240){
                       setDanger(true) 
                    }else{
                        setDanger(false)
                    }
                    return newTime
                })
                    
                localStorage.setItem('timer', JSON.stringify(time))
            }
        }, 1000)


        return () => clearInterval(updateTime)

    }, 
    [time])
  return (
        <div className='flex flex-col'>
            <p className='text-xs'>Countdown</p>
            <h1 className={`text-xl font-bold ${danger? 'finish' : '' } `}>
                {
                    `${time.hours.toString().padStart(2, '0')} : ${time.minutes.toString().padStart(2, '0')} : ${time.seconds.toString().padStart(2, '0')}`
                }
            </h1>
        </div>
  )
}

export default Timer
