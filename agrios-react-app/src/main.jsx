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
import Shop from './pages/CC_Shop.jsx';
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
import AAdmin_Home from './pages/AAdmin_Home.jsx';
import CC_Navbar from './components/CC_Navbar.jsx';
import CC_profile from './pages/CC_profile.jsx';
import CC_AboutUs from './pages/CC_AboutUs.jsx';
import CC_Services from './pages/CC_Services.jsx';
import CC_News from './pages/CC_News.jsx';
import CC_Shop from './pages/Shop.jsx';
import CC_Contact from './pages/CC_Contact.jsx';
import BB_FNavbar from './components/BB_FNavbar.jsx';
import BB_FContact from './pages/BB_FContact.jsx';
import AAdmin_Navbar from './components/AAdmin_Navbar.jsx';
import AAdmin_UserManage from './pages/AAdmin_UserManage.jsx';
import AAdmin_FarmerManage from './pages/AAdmin_FarmerManage.jsx';
import BB_FAddProduct from './pages/BB_FAddProduct';
import EditProduct from './pages/BB_EditProduct.jsx';
import OrderConfirmationSub from './pages/CC_OrderConfirmationSub.jsx';
import PricePrediction from './pages/BB_FPricePrediction.jsx';
import OrderHistory from './pages/BB_FOrderHistory.jsx';
import AAdmin_OrderManage from './pages/AAdmin_OrderManage.jsx';
import AAdmin_ProductManage from './pages/AAdmin_ProductManage .jsx';
import AAdmin_PricePrediction from './pages/AAdmin_PricePrediction.jsx';
import CC_PricePrediction from './pages/CC_PricePrediction.jsx';
import AAdmin_HelpandSupport from './pages/AAdmin_HelpandSupport.jsx';
import ForgetPW from './pages/ForgetPW.jsx';
import ChatbotAssistant from './components/ChatbotAssistant.jsx';

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
        <Route path='/adminhome' element={<AAdmin_Home />} />
        <Route path='/custnavbar' element={<CC_Navbar />} />
        <Route path='/cusprofile' element={<CC_profile />} />
        <Route path='/cusaboutus' element={<CC_AboutUs />} />
        <Route path='/cusservices' element={<CC_Services />} />
        <Route path='/cusnews' element={<CC_News />} />
        <Route path='/cusshop' element={<CC_Shop />} />
        <Route path='/cuscontact' element={<CC_Contact />} />
        <Route path='/farmnavbar' element={<BB_FNavbar />} />
        <Route path='/farmcontact' element={<BB_FContact />} />
        <Route path='/adminnavbar' element={<AAdmin_Navbar />} />
        <Route path='/adminusermanagement' element={<AAdmin_UserManage />} />
        <Route path='/adminfarmermanagement' element={<AAdmin_FarmerManage />} />
        <Route path="/bb-fhome" element={<BB_FHome />} />
        <Route path="/addproduct" element={<BB_FAddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/sub-order" element={<OrderConfirmationSub />} />
        <Route path="/pricepredict" element={<PricePrediction />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/adminordermanagement" element={<AAdmin_OrderManage />} />
        <Route path="/adminproductmanagement" element={<AAdmin_ProductManage />} />
        <Route path="/adminpricePrediction" element={<AAdmin_PricePrediction />} />
        <Route path='/cusprediction' element={<CC_PricePrediction />} />
        <Route path='/adminhelpsupport' element={<AAdmin_HelpandSupport />} />
        <Route path='/forgetpw' element={<ForgetPW />} />
        <Route path='/chatbot' element={<ChatbotAssistant />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
