import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/productSlice';
import { IProduct, IState } from '../../types/products.types';

const Home = (): JSX.Element => {
    const dispatch = useDispatch()
    const { products: productsState } = useSelector((state:IState)=>state)
    const { products } = productsState
    
    const getAllProducts = async () => {
        try {
            let res = await axios('http://localhost:8000/products')
            dispatch(getProducts(res.data))
        } catch (error) {
            console.error(error)
        }
    }
    
    const [values, setValues] = useState({
        title: '',
        type: '',
        price: 0,
        rating: [],
        img:''
    })


    const handleInp = (e:any) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const addNewProduct = async (obj:IProduct) => {
        try {
            await axios.post(`http://localhost:8000/products`, obj)
            getAllProducts()
        } catch (error) {
            console.log(error);
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
        <div>
            <input onChange={handleInp} placeholder="title" name='title' value={values.title} type="text"/>
            <input onChange={handleInp} placeholder="type" name='type' value={values.type} type="text"/>
            <input onChange={handleInp} placeholder="img" name='img' value={values.img} type="text"/>
            <input onChange={handleInp} placeholder="price" name='price' value={values.price} type="text"/>
            <button onClick={()=>addNewProduct(values)} >add</button>


            <div className='list' style={{display: 'flex', justifyContent:'space-evenly', marginTop:'100px', flexWrap:'wrap'}} >
                {
                    products && products.length ?
                    products.map((item, index)=>(
                        <div key={index}>
                            <h4>{item.title}</h4>
                            <img width={320} src={item.img} alt="" />
                            <button onClick={()=>deleteProducts(item.id)} >Delete</button>
                        </div>
                    )):
                    <h2>Wait a minute</h2>
                }
            </div>
        </div>
    );
};

export default Home;