import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { CartShown: false },
  reducers: {
    toggle(state) {
      state.CartShown = !state.CartShown;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
