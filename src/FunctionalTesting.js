import React, { useState } from 'react'

function FunctionalTesting() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                handleClick()
                return setCount(count + 1)
            }}>Click me</button>
        </div>
    )
}

export default FunctionalTesting

