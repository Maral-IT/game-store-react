import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart, setItemInCart } from "../../redux/cart/cartReducer";
import Button from "../Button";
import "./style.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation(); 
      dispatch(setItemInCart(game));  
  }

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} руб.</span>
      <Button onClick={handleClick}>        
        В корзину
      </Button>
    </div>
  );
};

export default GameBuy;
