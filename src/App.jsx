import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
     
        <HeroSection />
       <About />
      
      <Footer />
      </>
    
  );
}

export default App;


