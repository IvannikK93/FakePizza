import { configureStore } from "@reduxjs/toolkit";
import pizza from "./pizza/slice";
import cart from "./cart/slice";
import filter from "./filter/slice";
import { pizzasApi } from "../api/pizzasApi";

export const store = configureStore({
  reducer: {
    pizza,
    cart,
    filter,
    getPizzas: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
