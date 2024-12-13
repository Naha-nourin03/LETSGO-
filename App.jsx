import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import AddSp from './components/AddSp'
import Info from './components/Info'
import Camp from './components/Camp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
    <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path='/Signup' element={<Signup />} /> 
     <Route path="/home" element={<Home/>}/>
     <Route path="/add" element={<AddSp />} />
     <Route path="/info" element={<Info />} />
     <Route path="/camp" element={<Camp />} />
     </Routes>
     </div>
    </>
  )
}

export default App
