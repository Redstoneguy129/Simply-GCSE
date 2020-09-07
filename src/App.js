import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Dashboard from './components/pages/Dashboard'
import English from './components/pages/English'
import Mathematics from './components/pages/Mathematics'
import Physics from './components/pages/science/Physics'
import Chemistry from './components/pages/science/Chemistry'
import Biology from './components/pages/science/Biology'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Navigation/>
          <Route path="/english"><English/></Route>
          <Route path="/mathematics"><Mathematics/></Route>
          <Route path="/physics"><Physics/></Route>
          <Route path="/chemistry"><Chemistry/></Route>
          <Route path="/biology"><Biology/></Route>
          <Route path="/"><Dashboard/></Route>
          <Footer/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}