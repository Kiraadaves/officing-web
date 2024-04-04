import React from "react";
import axios from "axios";
import { submitFormFailure } from "@/app/Redux/slice/createCustomerSlice";

const API_BASE = "https://officing-node-api.onrender.com/api/v1/customers";

export const submitFormData = async (formData: object) => {
  try {
    const response = await axios.post(`${API_BASE}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};
