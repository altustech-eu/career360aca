import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';
import Nav from "./components/Homepage/Navigation";
import Footer from './components/pages/Footer';
import Banner from './components/pages/banner'; // Import your banner

function App() {
  return (
    <Router>
      {/* 1. Banner stays at the absolute top */}
      <Banner /> 
      
      {/* 2. Nav follows the banner */}
      <Nav />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;