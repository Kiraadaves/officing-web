import { configureStore } from "@reduxjs/toolkit";
import createCustomerSlice from "./slice/createCustomerSlice";

const store = configureStore({
  reducer: {
    createCustomer: createCustomerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
