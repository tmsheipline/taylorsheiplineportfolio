import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages'
import Resume from './components/Resume';
import Skills from './components/Skills';
import InfoSection from './components/InfoSection';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact /> 
      <Route path="/resume" element={<Resume />} exact /> 
      <Route path="/tech" element={<Skills />} exact /> 
      <Route path="/projects" element={<InfoSection />} exact /> 
      </Routes>
    </Router>
  )
}
