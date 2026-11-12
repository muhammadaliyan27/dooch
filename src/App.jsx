import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Collection from './pages/Collection'
import Kurtas from './pages/Kurtas'
import About from './pages/About'
import Accessories from './pages/Accessories'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/kurtas" element={<Kurtas />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessories" element={<Accessories />} />

        

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App