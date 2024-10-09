import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import News from './pages/News.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import HelpSupport from './pages/HelpSupport.jsx'
import FAQ from './pages/FAQ.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services/>}/>  
        <Route path='/news' element={<News/>}/>   
        <Route path='/shop' element={<Shop/>}/>  
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<HelpSupport/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
