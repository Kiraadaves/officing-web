import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: {
    customerType: "",
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    currency: "",
    description: "",
  },
  billing: {
    contactName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  shipping: {
    contactName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    deliveryInstruction: "",
  },
  remark: "",
};

const createCustomerSlice = createSlice({
  name: "createCustomer",
  initialState,
  reducers: {
    setContactData(state, action) {
      state.contact = action.payload;
    },
    setBillingData(state, action) {
      state.billing = action.payload;
    },
    setShippingData(state, action) {
      state.shipping = action.payload;
    },
    clearForm: (state) => {
      state.contact = initialState.contact;
      state.billing = initialState.billing;
      state.shipping = initialState.shipping;
      state.remark = initialState.remark;
    },
  },
});

export const { setContactData, setBillingData, setShippingData, clearForm } =
  createCustomerSlice.actions;

export default createCustomerSlice.reducer;
