import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa/'
import { getDetail } from '../../../store/actions/product.action';
import { IState } from '../../../types/products.types';
import './ProductDetail.css'
import axios from 'axios';


const ProductDetail = (): JSX.Element => {
    const {id}:any = useParams()
    const { products: {product} } = useSelector((state:IState)=>state)
    
    const dispatch = useDispatch()

    let stars = Array(5).fill(0)

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue ] = useState();

    const handleClick = (value:any) => {
        setCurrentValue(value)
    }

    const handleMouseOver = (value: any) => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const ratingDisplay = (arr:number[] | null) =>{
        let sum = 0
        if(arr && arr.length){
            arr.forEach((elem) => {
                sum+=elem
            });
        }
        return arr && arr.length ? Math.floor(sum/arr.length) : 0;
    }

    const submitRating = async (value:number) => {
        console.log(value);
        let newProduct = JSON.parse(JSON.stringify(product));
        newProduct.rating.push(value)
        console.log(newProduct);
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct)
        getDetail(dispatch, id)
    }

    useEffect(()=>{
        getDetail(dispatch, id)
    }, [])


    return (
        <React.Fragment>
            {
                product ? (
                    <div style={{paddingTop:'100px'}}>
                        <img src={product.img} alt="" />
                        <div>
                            <span>Rating:</span>
                            {
                                stars.map((item, index)=>(
                                    <FaStar 
                                        key={index} 
                                        size={24}
                                        style={{
                                            marginRight:10,
                                            cursor:'pointer'
                                        }}
                                        color={(ratingDisplay(product.rating)) > index ? '#FFBA5A' : '#a9a9a9' }
                                    />
                                ))
                            }
                        </div>
                        <h4>{product.title}</h4>
                        <div className="stars">
                            {
                                stars.map((item, index)=>(
                                    <FaStar 
                                        key={index} 
                                        size={24}
                                        style={{
                                            marginRight:10,
                                            cursor:'pointer'
                                        }}
                                        color={(hoverValue || currentValue) > index ? '#FFBA5A' : '#a9a9a9' }
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                ))
                            }
                        </div>
                        <button onClick={()=>submitRating(currentValue)} >Submit</button>
                    </div>
                ) :
                <h2>loading</h2>
            }
        </React.Fragment>
    );
};

export default ProductDetail;