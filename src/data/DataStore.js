import { createStore } from "redux";
import { CommonReducer } from "./CommonReducer";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";

export const SportsEcommerceDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer)
);
