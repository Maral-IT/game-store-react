import React, { useCallback, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartMenu from '../Cart-menu/index';
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import ItemInCart from "../itemInCart";
import { calcTotalPrice } from "../utils";
import "./style.css";

const CartBlock = () => {
  const [showCart, setShowCart] = useState(false)
  
  const items = useSelector(state => state.cart.itemInCart)
  const totalPrice = items.reduce((acc, item) => acc += item.price, 0)

  return (
    <div className="cart-block">
      <ItemInCart />
     <Link to="/cart" onMouseEnter={() => setShowCart(true)
    } onMouseLeave={() => setShowCart(false)}>
     <AiOutlineShoppingCart
        size={25}
        className="cart-block__icon"
      />
     </Link>
      <span className="cart-block__total-price">{totalPrice} руб.</span>
      {
        showCart && <CartMenu items={items} setShowCart={setShowCart}/> 
      }

      {/* {totalPrice > 0 ? (
        
      ) : null}
      {isCartVisible && (
        <CartMenu setIsCartVisible={setIsCartVisible} items={items} />
      )} */}
    </div>
  );
};

export default CartBlock;
