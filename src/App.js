import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';

import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
              </Routes>
              <Footer />
    </Router>
  );
}

export default App;
