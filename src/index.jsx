import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './Utils/style-page/index.css';
import Home from './pages/Home/Home-index';
import Accomodation from './pages/Accomodation-Sheet/Accomodation-index';
import About from './pages/About/About-index';
import Error from './pages/Error/Error-index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
     
    }
`

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>   
        <Route path="/accomodation">
          <Accomodation />
        </Route>
        <Route path ="about">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);