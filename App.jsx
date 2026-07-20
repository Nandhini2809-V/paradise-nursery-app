import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './CartSlice';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants</p>
      <button className="getStartedBtn" onClick={() => navigate('/products')}>
        Get Started
      </button>
    </div>
  );
}

function Navbar() {
  return (
    <nav style={{padding: '15px', background: 'green', display: 'flex', gap: '20px'}}>
      <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
      <Link to="/products" style={{color: 'white', textDecoration: 'none'}}>Products</Link>
      <Link to="/cart" style={{color: 'white', textDecoration: 'none'}}>Cart</Link>
      <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About Us</Link>
    </nav>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
