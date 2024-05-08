import React, {useState, useEffect, useRef} from "react"

function TypingGame() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [start, setStart] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textareaRef = useRef(null)


    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function handleStart() {
        setStart(prevStart => !prevStart)
        textareaRef.current.focus()
    }

    useEffect(() => {
        timeRemaining ? start && setTimeout(() => {
            setTimeRemaining(prevTime => prevTime - 1)}, 1000)
        : (setStart(false), setWordCount(countWords(text)))        
    }, [timeRemaining, start])
    
    function countWords(text) {
        return text.trim().split(/\s+/).length
    }

    return (
        <div>
            <h1>Yo, Yo, Yo, this be for typing</h1>
            <div>
                <textarea onChange={handleChange} disabled={!start} ref={textareaRef}/>
            </div>
            <h4>Time Remaining, bitch: {timeRemaining}</h4>
            <button onClick={handleStart}>Let's go, Mother Fucker!</button>
            <h1>Word Count, brah: {wordCount}</h1>
        </div>
    )
}

export default TypingGame