import React from 'react'
// components
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
    
      {/* Animated background blobs */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] top-[-200px] left-[-200px] animate-blob"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] bottom-[-150px] right-[-150px] animate-blob animation-delay-2000"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] top-[30%] left-[50%] -translate-x-1/2 animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Banner />
        <Nav />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
