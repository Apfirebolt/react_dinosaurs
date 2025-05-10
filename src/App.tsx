import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dinosaurs from './screens/Dinosaurs';
import Home from './screens/Home';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/dinosaurs">Dinosaurs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaurs" element={<Dinosaurs />} />
      </Routes>
    </div>
  </Router>
);

export default App;