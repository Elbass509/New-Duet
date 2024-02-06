import { createContext, useState, useEffect } from "react";
export const storeAgent = createContext({})


//default dark mode setting


const StoreProvider = (props) => {
  const [mode, setMode] = useState(() => {
    const storedVal = localStorage.getItem('mode')
    return storedVal ? storedVal : 'DarkMode'
  })
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [media, setMedia] = useState(window.innerWidth)
  const [showCalculator, setShowCalculator] = useState(false)
  const calculatorDisplayHandler = () => {
    showCalculator === false ? setShowCalculator(true) : setShowCalculator(false)
  }
  const [questions, setQuetions] = useState([])

    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('Dark')
        return (storedMode ? JSON.parse(storedMode) : null)
    })


    
    //Handling the screen size change
    useEffect(() => {
        const updateWindowChange =  () => {
            setMedia(window.innerWidth)
            console.log(media);
        }
        window.addEventListener( 'resize', updateWindowChange )

        return () => window.removeEventListener( 'resize', updateWindowChange)
    }, [ media ])

    const dark = {
        bg: 'bg-[#181818]',
        sideBg: 'bg-gradient-to-l from-[#564FDC] to-[#4941C1]',
        textColor: 'text-white',
        btn: 'border-[1px] border-[#AAB7F7] text-[#aab7f7]',
        btnHover: 'bg-[#35337c]',
        btnActive: 'bg-[#201e48]',
        mode: mode
    }

    function darkModeHandler(){
        if(darkMode === false){
            setDarkMode(true)
            setMode('LightMode')
            localStorage.setItem('Dark', JSON.stringify(dark))
            localStorage.setItem('mode', mode)
        }else{
            setMode('DarkMode')
            setDarkMode(false)
            localStorage.removeItem('Dark')
            localStorage.removeItem('mode')
        }
    }
    
    const values = {
        darkModeHandler: darkModeHandler,
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        dark: dark,
        mode: mode,
        media: media,
        showCalculator: showCalculator,
        calculatorDisplayHandler: calculatorDisplayHandler,
        setQuetions: setQuetions,
        questions: questions,
        count, setCount, score, setScore
    }

    return(
        <storeAgent.Provider value={values}>
            {props.children}
        </storeAgent.Provider>
    )
}

export default StoreProvider