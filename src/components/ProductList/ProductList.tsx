import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/productSlice';
import { IState } from '../../types/products.types';
import './ProductList.css'

const ProductList = (): JSX.Element => {
    const dispatch = useDispatch()
    const { products: productsState } = useSelector((state:IState)=>state)
    const { products } = productsState;

    const getAllProducts = async () => {
        try {
            let res = await axios('http://localhost:8000/products')
            dispatch(getProducts(res.data))
        } catch (error) {
            console.error(error)
        }
    }

    const deleteProducts = async (id:any) =>{
        await axios.delete(`http://localhost:8000/products/${id}`)
        getAllProducts()
    }

    useEffect(()=>{
        getAllProducts()
    }, [])

    return (
        <div className='list' style={{display: 'flex', justifyContent:'space-evenly', paddingTop:'100px', flexWrap:'wrap'}} >
            {
                products && products.length ?
                products.map((item, index)=>(
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <img width={320} src={item.img} alt="" />
                        <button style={{color:'red'}} onClick={()=>deleteProducts(item.id)} >Delete</button>
                    </div>
                )):
                <h2>Wait a minute</h2>
            }
        </div>
    );
};

export default ProductList;