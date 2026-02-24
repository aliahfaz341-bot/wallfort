import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Studio from './Component/Studio';
import Blog from './Component/Blog';
import Projects from './Component/Projects';
import Header from './Component/Header';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Projects />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div >
  )
}

export default App