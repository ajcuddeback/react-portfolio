import React from 'react';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
