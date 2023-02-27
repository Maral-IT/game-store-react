import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(state => state.cart.itemInCart)
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

  return (
    <div>
      <div style={{ position: 'relative', top: "50px" }}>
        {
          items.map(item => item.title)
        }
      </div>
      {
        items.length > 0 &&
        <div>
          <p>Итого:</p>
          <div>{totalPrice}</div>
          <button>Оформить заказ</button>
        </div>
      }
    </div>
  );
};

export default Cart