import React from 'react';
import OrderItem from '../../components/Order-Item';
import { calcTotalPrice } from '../../components/utils';

const OrderPage = () => {


  return (
    <div className="order-page">
      <div className="order-page__left">
        <OrderItem/>
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price" style={{fontSize:"30px", fontWeight:"bold"}}>
         2033  руб.
        </div>
      </div>
    </div>
  );
};

export default OrderPage;