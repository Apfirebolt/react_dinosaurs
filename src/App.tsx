import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dinosaurs from './screens/Dinosaurs';
import Home from './screens/Home';
import About from './screens/About';
import Editor from './screens/Editor';
import Dashboard from './screens/Dashboard';
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
        <Route path="/editor" element={<Editor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;