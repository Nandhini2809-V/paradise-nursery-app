import React from 'react';

function AboutUs() {
  return (
    <div style={{padding: '40px', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', color: 'green'}}>About Paradise Nursery</h1>
      
      <div style={{marginTop: '30px', lineHeight: '1.8'}}>
        <h2>Our Story</h2>
        <p>
          Paradise Nursery was founded in 2015 with a simple mission: to bring the beauty of nature into every home. 
          We believe that plants not only beautify your space but also improve your health and well-being.
        </p>

        <h2>Our Mission</h2>
        <p>
          At Paradise Nursery, we provide high-quality, healthy houseplants and gardening supplies to plant lovers across India. 
          We specialize in indoor plants, low-light plants, air-purifying plants, and succulents that are perfect for your home and office.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌱 100% Healthy and Well-cared Plants</li>
          <li>🚚 Fast and Safe Delivery across Chennai</li>
          <li>🌿 Expert Plant Care Guidance</li>
          <li>💚 Affordable Prices for Everyone</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> 123, Green Street, Chennai, Tamil Nadu, 600001<br/>
          <strong>Email:</strong> support@paradisenursery.com<br/>
          <strong>Phone:</strong> +91 98765 43210
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
