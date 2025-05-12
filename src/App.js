import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const App = () => {
  const [userInput, setUserInput] = useState();
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1
  }
)

  return (
    <div>
      <input value={userInput} onChange={(e)=>
      setUserInput(e.target.value)}></input>
      <p>The component rendered {renders.current} times</p>
    </div>
  )
}

export default App