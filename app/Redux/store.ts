 import { configureStore } from "@reduxjs/toolkit";
import AssetsSlice from "./slice/assestSlice";

const store = configureStore({
  reducer: {
    asset: AssetsSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
