import { configureStore, createSlice } from "@reduxjs/toolkit";
import keySlice from "./keySlice";

const store = configureStore({
  reducer: keySlice.reducer,
});
export default store;
