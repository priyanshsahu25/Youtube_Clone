import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1 className='bg-red-500 text-4xl' >Hello</h1>   
     <p className='bg-green-600'>Helo how ate</p>
    </>
  )
}

export default App
