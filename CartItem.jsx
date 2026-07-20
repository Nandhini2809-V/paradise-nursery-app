import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cart amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Shopping Cart</h1>
      
      <Link to="/products">
        <button style={{ padding: '10px', marginBottom: '20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Continue Shopping
        </button>
      </Link>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
              
              {/* Thumbnail, Name, Unit Price */}
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                
                {/* Total cost for each plant */}
                <p><strong>Item Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>

                {/* Increase/Decrease buttons */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
              </div>

              {/* Delete button */}
              <button onClick={() => handleDelete(item.id)} style={{ padding: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
                Delete
              </button>
            </div>
          ))}

          {/* Total Cart Amount */}
          <h2 style={{ textAlign: 'right', color: 'green' }}>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default CartItem;
