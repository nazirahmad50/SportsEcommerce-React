import { applyMiddleware, createStore } from "redux";
import { CommonReducer } from "./CommonReducer";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { asynActions } from "./AsyncMiddleware";

export const SportsEcommerceDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asynActions)
);
