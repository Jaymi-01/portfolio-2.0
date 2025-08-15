import React from 'react'
import  Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-15 px-4 max-w-6xl mx-auto">
        <About />
        <Skill />
        <Project />
      </div>
    </div>
  )
}

export default App