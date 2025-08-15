import React from 'react'
import  Navbar from './components/Navbar'
import About from './components/About'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-15 px-4 max-w-6xl mx-auto">
        <About />
      </div>
    </div>
  )
}

export default App