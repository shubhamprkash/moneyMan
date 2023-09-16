import { useState } from 'react';
import Navbar from "./components/Navbar";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
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
