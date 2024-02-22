import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Element from './Component/Element'

function App() {

  return (
    <>
      <div className="bg-gradient-to-bl from-slate-800 to-indigo-900 w-full h-screen text-slate-200 pt-1">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Element />}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
   
  )
}

export default App
