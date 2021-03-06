import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../../store/actions/product.action';
import { useNavigate, useParams } from 'react-router-dom';
import { IState, IProduct } from '../../../types/products.types';
import './EditProduct.css'

const EditProduct = ():JSX.Element => {
    const { id }:any = useParams()

    const navigate = useNavigate()

    const { products: productsState } = useSelector((state:IState)=>state)
    const { product } = productsState;
    console.log(product);
    
    
    const [values, setValues] = useState <IProduct | null >(product)
    
    const dispatch = useDispatch()

    const handleEditInp = (e:any) => {
        if(values){
            let obj = {
                ...values,
                [e.target.name]: e.target.value    
            }
            setValues(obj)
        }
    }

    useEffect(()=>{
        getDetail(dispatch, id)
    }, [])


    useEffect(() => {
        setValues(product)
    }, [product])

    const saveEdited = async (obj:IProduct | null) =>{
        await axios.patch(`http://localhost:8000/products/${id}`, obj)
        navigate('/products')
    }
    
    return (
        <div style={{paddingTop: '150px'}}>
            <input onChange={handleEditInp} placeholder="title" name='title' value={values?.title} type="text"/>
            <input onChange={handleEditInp} placeholder="type" name='type' value={values?.type} type="text"/>
            <input onChange={handleEditInp} placeholder="img" name='img' value={values?.img} type="text"/>
            <input onChange={handleEditInp} placeholder="price" name='price' value={values?.price} type="text"/>
            <button onClick={()=>saveEdited(values)} >add</button>
            {/* <img src={product?.img} alt="" />
            <h6>{product?.title}</h6> */}
        </div>
    );
};

export default EditProduct;