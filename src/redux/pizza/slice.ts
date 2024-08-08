import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPizza, IPizzaSliceState } from ".";

const initialState: IPizzaSliceState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TPizza[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
