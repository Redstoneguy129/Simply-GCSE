import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
