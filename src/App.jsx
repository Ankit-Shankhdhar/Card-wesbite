import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Navbar from './components/Navbar.jsx';
import CreateProfile from './components/CreateProfile.jsx';
import About from './page/About.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
