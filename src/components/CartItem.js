import React from 'react';
import '../cart.css'
function CartItem ({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.images[0]} alt="product" />
      <div>
        <h4>{item.title}</h4>
        <h5>${item.quantity * item.price}</h5>
        <span className="remove-item" onClick={() => onRemove(item.id)}>remove</span>
      </div>
      <div>
        <i className="fas fa-chevron-up increase-quantity" onClick={() => onIncrease(item.id)}></i>
        <p className="item-amount">{item.quantity}</p>
        <i className="fas fa-chevron-down decrease-quantity" onClick={() => onDecrease(item.id)}></i>
      </div>
    </div>
  );
};

export default CartItem;