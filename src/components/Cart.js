import React from 'react';
import CartItem from './CartItem';
import '../cart.css';

function Cart({ cartItems = [], setCartItems, toggleCart }) {
  const handleIncrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };


  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay showCart">
      <div className="cart showCart">
        <span className="close-cart" onClick={toggleCart}>
          <i className="fas fa-window-close"></i>
        </span>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='message'>There's no items yet!</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))}
            <div className="cart-footer">
              <h3>Total: ${totalAmount.toFixed(2)}</h3>
              <button onClick={handleClearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
