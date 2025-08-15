import React from 'react'
import  Navbar from './components/Navbar'
import About from './components/About'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 px-4">
        <About />
      </div>
    </div>
  )
}

export default App