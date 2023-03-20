import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
