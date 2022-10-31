import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Compoents/Navbar'
import HeroSection from './Compoents/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
     <Navbar/>
     <HeroSection/>
    </div>
  )
}

export default App
