import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
