import React from "react";
import GameCover from "../Game-cover/game-cover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.css";

const OrderItem = ({ game }) => {



  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle
          size="30px"
          className="order-item__close"
          
        />
      </div>
    </div>
  );
};

export default OrderItem;
