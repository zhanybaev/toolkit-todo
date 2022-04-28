import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/products.types";


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
        },
        getOneProduct: (state, action)=>{
            return {
                ...state,
                product: action.payload
            }
        }
    }
})

export const productReducer = productSlice.reducer
export const { getProducts, getOneProduct } = productSlice.actions