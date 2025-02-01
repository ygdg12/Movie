import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Fav from './Pages/Fav';
import Nav from './Comp/Nav';
import "./css/App.css";
import { MovieProvider } from './Pages/contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
