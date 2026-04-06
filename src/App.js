import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/pages/Aboutus';
import Loadingpage from './components/pages/loadingpage';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      <Loadingpage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
              </Routes>
              <Footer />
    </Router>
  );
}

export default App;
