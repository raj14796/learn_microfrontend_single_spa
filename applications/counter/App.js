import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + 1)
    }
    const handleDecrement = () => {
        setCounter(prevCounter => prevCounter - 1)
    }
    return (
        <div id="app">
            <h1>Counter : {counter}</h1>
            <br /><br />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default App
