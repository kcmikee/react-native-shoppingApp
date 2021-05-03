import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";
// export const addToCart = (product) => {
//   return { type: CART_ADD_ITEM, product: product };
// };

// export const removeFromCart = (productId) => {
//   return { type: CART_REMOVE_ITEM, pid: productId };
// };
export const addToCart = (productId, size) => async (dispatch) => {
  const { data } = await Axios.get(
    `http://192.168.43.183:5000/api/products/${productId}`
  );
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.productName,
      image: data.productCover,
      brand: data.brand,
      price: data.price,
      perPrice: data.price,
      countInStock: data.numReviews,
      product: data._id,
      size,
    },
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
