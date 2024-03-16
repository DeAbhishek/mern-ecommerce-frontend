import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productSlice";
import authReducer from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    product: productsReducer,
    auth: authReducer,
  },
});
