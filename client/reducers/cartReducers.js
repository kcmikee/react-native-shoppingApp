import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_EMPTY,
} from "../constants/cartConstants";
import CartItemModel from "../model/cart-item";

const initState = {
  items: {},
  totalAmount: 0,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const ITEM = action.payload;
      const prodPrice = ITEM.price;
      const prodName = ITEM.name;
      const prodCover = ITEM.image;
      const prodBrand = ITEM.brand;
      const prodId = ITEM.product;
      const prodSize = ITEM.size;

      if (state.items[prodId]) {
        const updatedCartItem = new CartItemModel(
          state.items[prodId].qty + 1,
          prodPrice,
          prodName,
          state.items[prodId].sum + prodPrice,
          prodCover,
          prodBrand,
          prodId,
          prodSize
        );
        return {
          ...state,
          items: {
            ...state.items,
            [prodId]: updatedCartItem,
          },
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        const newCartItem = new CartItemModel(
          1,
          prodPrice,
          prodName,
          prodPrice,
          prodCover,
          prodBrand,
          prodId,
          prodSize
        );
        return {
          ...state,
          items: { ...state.items, [prodId]: newCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      }
    case CART_REMOVE_ITEM:
      const selectedCartItem = state.items[action.payload];
      const currentQty = selectedCartItem.qty;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        updatedCartItems = new CartItemModel(
          selectedCartItem.qty - 1,
          selectedCartItem.price,
          selectedCartItem.name,
          selectedCartItem.sum - selectedCartItem.price,
          selectedCartItem.image,
          selectedCartItem.brand,
          selectedCartItem.id,
          selectedCartItem.size
        );
        updatedCartItems = {
          ...state.items,
          [action.payload]: updatedCartItems,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.payload];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.price,
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
