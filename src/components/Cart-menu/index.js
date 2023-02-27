import React from 'react';
import './style.css';

const CartMenu = ({ items, onClick, setShowCart }) => {
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

  return (
    <div className="cart-menu" onMouseEnter={() => setShowCart(true)
    } onMouseLeave={() => setShowCart(false)}>
      <div style={{ position: 'relative', top: "50px" }}>
        {
          items.map(item => item.title)
        }
      </div>
      {
        items.length > 0 &&
        <div className='cart-menu__arrange'>
          <p>Итого:</p>
          <div>{totalPrice}</div>
          <button>Оформить заказ</button>
        </div>
      }
    </div>
  );
};

export default CartMenu;