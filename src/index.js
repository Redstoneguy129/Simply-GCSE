import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Dashboard from './components/pages/Dashboard'
import Paper1 from './components/pages/english/Paper1'
import Paper2 from './components/pages/english/Paper2'
import Mathematics from './components/pages/Mathematics'
import Physics from './components/pages/science/Physics'
import Chemistry from './components/pages/science/Chemistry'
import Biology from './components/pages/science/Biology'

import './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
        <div className="App">
          <Route path="/english/paper1"><Paper1/></Route>
          <Route path="/english/paper2"><Paper2/></Route>
          <Route path="/mathematics"><Mathematics/></Route>
          <Route path="/science/physics"><Physics/></Route>
          <Route path="/science/chemistry"><Chemistry/></Route>
          <Route path="/science/biology"><Biology/></Route>
          <Route path="/"><Dashboard/></Route>
        </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
