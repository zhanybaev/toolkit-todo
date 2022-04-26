import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductState } from "../../types/products.types";


const initialState:IProductState = {
    products: [],
    product: null,
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action)=>{
            return {
                ...state,
                products: action.payload
            }
        }
    }
})

export const productReducer = productSlice.reducer
export const { getProducts } = productSlice.actions