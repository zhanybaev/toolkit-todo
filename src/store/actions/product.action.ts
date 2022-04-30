import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { getOneProduct, getProducts } from "../slices/productSlice"


export const getAllProducts = async (dispatch: Dispatch<AnyAction>) => {
    try {
        let res = await axios('http://localhost:8000/products')
        dispatch(getProducts(res.data))
    } catch (error) {
        console.error(error)
    }
}


export const getDetail = async (dispatch: Dispatch<AnyAction>, id:string|number) => {
    try {
        let { data } = await axios(`http://localhost:8000/products/${id}`)
        dispatch(getOneProduct(data))
    } catch (error) {
        console.error(error)
    }
}