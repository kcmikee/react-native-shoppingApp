import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productListReducer } from "./reducers/productReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initState = {
  cart: {
    cartItems: { item: [], totalAmount: 0 },
    // paymentMethod: "Flutterwave",
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  user: userSigninReducer,
  userReg: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
