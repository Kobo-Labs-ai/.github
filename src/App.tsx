import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
