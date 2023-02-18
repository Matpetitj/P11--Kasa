import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Utils/style-page/index.css';
import Home from './pages/Home/Home-index';
import Accomodation from './pages/Accomodation-Sheet/Accomodation-index';
import Header from './components/Header/Header';
import About from './pages/About/About-index';
import Error from './pages/Error/Error-index';
import Footer from './components/Footer/Footer-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
              <div className="global_style">
                {/* faire un children au global style avec tout sauf le footer */}
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />  
                  <Route path="/accomodation/:id" element={<Accomodation />} />
                  <Route path ="/about" element={<About />} />
                  <Route path = "*" element={<Error />} />
                </Routes>
                <Footer />
              </div>
              {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);