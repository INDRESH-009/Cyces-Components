import React from 'react'
import Navbar from './components/Header/Navbar/Navbar'
import Letsbuild from './components/Header/Letsbuild/Letsbuild'
import Podcast from './components/Hero-section/Hero-right/Podcast/Podcast'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Letsbuild/>
        <Podcast/>
        <Footer/>
    </div>
  )
}

export default App

