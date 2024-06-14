import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Utils/style-page/index.css'
import Home from './pages/Home/Home-index'
import Accommodation from './pages/Accommodation-Sheet/Accommodation-index'
import Header from './components/Header/Header'
import About from './pages/About/About-index'
import Error from './pages/Error/Error-index'
import Footer from './components/Footer/Footer-index'

function App() {
  return (
    <div className="global_style">
      <div style={{ flex: 1 }} className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
