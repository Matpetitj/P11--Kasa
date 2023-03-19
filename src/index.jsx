import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Utils/style-page/index.css'
import Home from './pages/Home/Home-index'
import Accommodation from './pages/Accomodation-Sheet/Accomodation-index'
import Header from './components/Header/Header'
import About from './pages/About/About-index'
import Error from './pages/Error/Error-index'
import Footer from './components/Footer/Footer-index'
// import accommodations from './assets/Datas//logements.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div className="global_style">
        <div style={{ flex: 1 }}>
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
    </Router>
  </React.StrictMode>
)
