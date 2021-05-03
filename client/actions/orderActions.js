import { ORDER_CREATE_REQUEST } from "../constants/ordersConstants";
export const addOrder = (cartItem, totalAmount) => {
  return {
    type: ORDER_CREATE_REQUEST,
    orderData: {
      items: cartItems,
      amount: totalAmount,
    },
  };
};
