import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './pages/AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
