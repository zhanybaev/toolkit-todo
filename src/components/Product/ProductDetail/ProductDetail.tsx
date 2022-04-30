import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa/'
import { getDetail } from '../../../store/actions/product.action';
import { IState } from '../../../types/products.types';
import './ProductDetail.css'

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
}

const ProductDetail = (): JSX.Element => {
    const {id}:any = useParams()
    const { products: {product} } = useSelector((state:IState)=>state)
    
    const dispatch = useDispatch()


    useEffect(()=>{
        getDetail(dispatch, id)
    }, [])

    return (
        <React.Fragment>
            {
                product ? (
                    <div style={{paddingTop:'100px'}}>
                        <img src={product.img} alt="" />
                        <h4>{product.title}</h4>
                        <input type="number" name="rating" max={5} min={1} />
                    </div>
                ) :
                <h2>loading</h2>
            }
        </React.Fragment>
    );
};

export default ProductDetail;