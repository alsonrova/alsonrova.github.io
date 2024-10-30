import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import ProjectPage from './Component/ProjectPage'
import HobbiesPage from './Component/HobbiesPage'
import SkillsPage from './Component/SkillsPage'
import Contact from './Component/Contact'

function App() {

  return (
    <>
      <div className="bg-gradient-to-bl from-slate-800 to-indigo-900 w-full min-h-screen text-slate-200 pt-1">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/project' element={<ProjectPage />}/>
            <Route path='/hobbies' element={<HobbiesPage />}/>
            <Route path='/skills' element={<SkillsPage />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
   
  )
}

export default App
