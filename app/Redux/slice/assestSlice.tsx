import {createSlice} from "@reduxjs/toolkit";

const AssetsSlice = createSlice({
    name: "Assets",
    initialState: {
        products: [],
        sl_Assest: "product",
        item_name: "",
        price: "",
        taxrate:"",
        sku:"",
        m_unit: "",
        currency: "",
        description: "",

    }, 
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSl_Assest: (state, action) => {
            state.sl_Assest = action.payload
        },
        setItemName: (state, action) => {
            state.item_name = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setTaxrate: (state, action) => {
            state.taxrate = action.payload
        },
        setSku: (state, action) => {
            state.sku = action.payload
        },
        setM_unit: (state, action) => {
            state.m_unit = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        }
    }
})

export const AssetsAction =  AssetsSlice.actions;

export default AssetsSlice