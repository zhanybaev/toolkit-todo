import axios from 'axios';
import { useState } from 'react';
import { getAllProducts } from '../../store/actions/product.action';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../types/products.types';

const Home = (): JSX.Element => {
    const dispatch = useDispatch()
    
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
            getAllProducts(dispatch)
        } catch (error) {
            console.log(error);
        }
    }
    


    return (
        <div style={{paddingTop:'150px'}}>
            <input onChange={handleInp} placeholder="title" name='title' value={values.title} type="text"/>
            <input onChange={handleInp} placeholder="type" name='type' value={values.type} type="text"/>
            <input onChange={handleInp} placeholder="img" name='img' value={values.img} type="text"/>
            <input onChange={handleInp} placeholder="price" name='price' value={values.price} type="text"/>
            <button onClick={()=>addNewProduct(values)} >add</button>
        </div>
    );
};

export default Home;