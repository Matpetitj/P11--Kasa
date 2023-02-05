import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Utils/style-page/index.css';
import Home from './pages/Home/Home-index';
// import Accomodation from './pages/Accomodation-Sheet/Accomodation-index';
import Header from './components/Header/Header';
import About from './pages/About/About-index';
import Error from './pages/Error/Error-index';
import Footer from './components/Footer/Footer-index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
     font-family: 'Montserrat', 'Helvetica', 'sans-serif';
     max-width: 1440px;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
        <Router>
              <div className="global_style">
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />  
                  {/* <Route path="/accomodation" element={<Accomodation />} /> */}
                  <Route path ="/about" element={<About />} />
                  <Route path = "*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
    </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);

// {/* <Router>
// <div style={{display: 'flex', flexDirection:'column'}}>
//             {/*<ThemeSwitcher setTheme={setTheme} theme={theme}/>*/}
//             <Header />
//             <Routes>
//             <Route path="/" element={<Home />} />  
//               {/* <Route path="/accomodation" element={<Accomodation />} /> */}
//               <Route path ="/about" element={<About />} />
//               <Route path = "*" element={<Error />} />
//             </Routes>
//             <Footer />
//         </div>
// </Router> */}

// {/* <Router>
//       <Header />
//       <Routes>
//       <Route path="/" element={<Home />} />  
//         {/* <Route path="/accomodation" element={<Accomodation />} /> */}
//         <Route path ="/about" element={<About />} />
//         <Route path = "*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router> */}