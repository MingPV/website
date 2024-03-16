//import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
