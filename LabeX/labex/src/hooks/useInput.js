import {useState} from 'react'

export function useInput() {
    const [input, setInput] = useState('')

    const handleInput = (e) =>{
        setInput (e.target.value)
    }
    return [input, handleInput]
}

