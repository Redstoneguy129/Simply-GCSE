import React from 'react';
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

export default function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route path="/english/paper1"><Paper1/></Route>
          <Route path="/english/paper2"><Paper2/></Route>
          <Route path="/mathematics"><Mathematics/></Route>
          <Route path="/science/physics"><Physics/></Route>
          <Route path="/science/chemistry"><Chemistry/></Route>
          <Route path="/science/biology"><Biology/></Route>
          <Route path="/"><Dashboard/></Route>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}