import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import MarketingAgencyPage from './components/Pages/MarketingAgencyPage';
import StudioAgencyPage from './components/Pages/StudioAgencyPage';
import DigitalAgencyPage from './components/Pages/DigitalAgencyPage';
import ServicePage from './components/Pages/ServicePage';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogListPage from './components/Pages/BlogListPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import TeamPage from './components/Pages/TeamPage';
import TeamDetailsPage from './components/Pages/TeamDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import Layout2 from './components/Layout/Layout2';
import TechStartupPage from './components/Pages/TechStartupPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import Shop from './components/Pages/Shop';
import ProductDetails from './components/Pages/Shop/ProductDetails';
import Cart from './components/Pages/Shop/Cart';
import Checkout from './components/Pages/Shop/Checkout';
import Success from './components/Pages/Shop/Success';
import Wishlist from './components/Pages/Shop/Wishlist';
import Layout3 from './components/Layout/Layout3';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="" element={<DigitalAgencyPage  />} />
    </Routes>
  );
}

export default App;
