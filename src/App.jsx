import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Money Man</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <p>Money Management Solution app in progress...</p>
      </div>
    
    </>
  )
}

export default App
