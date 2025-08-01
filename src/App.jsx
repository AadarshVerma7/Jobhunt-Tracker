import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import JobCard from './Components/JobCard'
import JobCardGrid from './Components/JobCardGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='jobcardgrid' element={<JobCardGrid />}></Route>
      </Routes>
    </>
  )
}

export default App
