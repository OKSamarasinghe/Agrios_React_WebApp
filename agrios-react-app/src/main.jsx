import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import News from './pages/News.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';
import ProductDetail from './pages/CC_ProductDetail.jsx'; // Correct import for ProductDetail
import Cart from './pages/CC_Cart.jsx';
import CC_Checkout from './pages/CC_Checkout.jsx';
import HelpSupport from './pages/HelpSupport.jsx';
import FAQ from './pages/FAQ.jsx';
import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx';
import OrderConfirmation from './pages/CC_OrderConfirmation.jsx';
import OrderTracking from './pages/CC_OrderTracking.jsx';
import Wishlist from './pages/CC_Wishlist.jsx';
import OrderManagement from './pages/CC_OrderManagement.jsx';
import Review from './pages/CC_GiveReview.jsx';
import View from './pages/CC_ViewOrder.jsx';
import Subscription from './pages/CC_Subscription.jsx';
import Subscribe from './pages/CC_CheckoutSub.jsx';
import CC_Home from './pages/CC_Home.jsx';
import BB_FHome from './pages/BB_FHome.jsx';

// Creating the root and rendering the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Correct product detail route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CC_Checkout />} />
        <Route path='/help' element={<HelpSupport />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/view-order' element={<OrderManagement />} />
        <Route path='/review' element={<Review />} />
        <Route path='/order' element={<View />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path='/cushome' element={<CC_Home />} />
        <Route path='/farmerhome' element={<BB_FHome />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
