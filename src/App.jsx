import React from 'react'
import  Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-15 px-4 max-w-6xl mx-auto">
        <About />
        <Skill />
      </div>
    </div>
  )
}

export default App