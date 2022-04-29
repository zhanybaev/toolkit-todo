import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../../store/slices/productSlice';
import { IState } from '../../../types/products.types';

const ProductDetail = (): JSX.Element => {
    const {id}:any = useParams()
    const { products: productsState } = useSelector((state:IState)=>state)
    const { product } = productsState;
    
    const dispatch = useDispatch()
    const getDetail = async (id:string|number) => {
        try {
            let { data } = await axios(`http://localhost:8000/products/${id}`)
            dispatch(getOneProduct(data))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getDetail(id)
    }, [])

    return (
        <div style={{paddingTop:'100px'}}>
            <img src={product?.img} alt="" />
            <h4>{product?.title}</h4>
        </div>
    );
};

export default ProductDetail;