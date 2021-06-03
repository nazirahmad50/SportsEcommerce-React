import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const SportsEcommerceDataStore = createStore(ShopReducer);
