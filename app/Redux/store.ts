 import { configureStore } from "@reduxjs/toolkit";
import AssetsSlice from "./slice/assestSlice";
import createCustomerSlice from "./slice/createCustomerSlice";

const store = configureStore({
  reducer: {
    asset: AssetsSlice.reducer
  
    createCustomer: createCustomerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
