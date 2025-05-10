import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dinosaurs from './screens/Dinosaurs';
import Home from './screens/Home';
import About from './screens/About';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dinosaurs" element={<Dinosaurs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;