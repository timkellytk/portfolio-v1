import React from 'react';
import Layout from './hoc/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
}

export default App;
