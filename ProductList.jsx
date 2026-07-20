import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Snake Plant', price: 15.99, image: 'https://images.unsplash.com/photo-1593482891663-2a7a8c6a8f8a?w=200' },
  { id: 2, name: 'Monstera', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
  { id: 3, name: 'Peace Lily', price: 18.50, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=200' },
  { id: 4, name: 'Aloe Vera', price: 12.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200' },
  { id: 5, name: 'Fiddle Leaf Fig', price: 29.99, image: 'https://images.unsplash.com/photo-1584589167171-a0bc293a5912?w=200' },
  { id: 6, name: 'Spider Plant', price: 14.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9bce0c2?w=200' }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems([...addedItems, product.id]);
  };

  const isAdded = (id) => cartItems.some(item => item.id === id);

  return (
    <div style={{padding: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', color: 'green'}}>Our Products</h1>
        <Link to="/cart">
          <button style={{padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px'}}>
            Go to Cart ({cartItems.length})
          </button>
        </Link>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px'}}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <img src={product.image} alt={product.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px'}}/>
            <h3>{product.name}</h3>
            <p style={{fontSize: '18px', fontWeight: 'bold', color: 'green'}}>${product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              disabled={isAdded(product.id)}
              style={{
                padding: '10px 20px', 
                background: isAdded(product.id) ? 'gray' : 'green', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: isAdded(product.id) ? 'not-allowed' : 'pointer'
              }}
            >
              {isAdded(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
