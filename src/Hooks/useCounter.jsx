import { useState } from "react"

export default function useCounter() {

const [counter, setCounter] = useState(1)

 function incrementCounter() {
    setCounter((count) => count + 1)
 }

function decrementCounter() {
    setCounter((count) => (count > 1 ? count - 1 : 1))
}

    return { counter, incrementCounter, decrementCounter }
}