import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path='/Signup' element={<Signup />} /> 
     <Route path="/home" element={<Home/>}/>
     <Route path="/add" element={<AddSp />} />
     <Route path="/info" element={<Info />} />
     <Route path="/camp" element={<Camp />} />
     </Routes>
     </div>
     <p  className="read-the-docs">
     Click on the Vite and React logos to learn more
     </p>
    </>
  )
}

export default App
