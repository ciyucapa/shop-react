import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductItem from "../productItem";
import './index.css'

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async() => {
            const response = await axios(API);
            if(response) {
                setProducts(response.data)
            }
        }
        getProduct()
    }, [])

    return (
        <section className="productList__container">
            <div className="productList__list">
                {products.map(({id, title, price, images}) => (
                        <div className="colum" key={id}>
                            <ProductItem id={id} price={price} title={title} image={images[0]} />
                        </div>
                    ))}
            </div>
        </section>
    )
};

export default ProductList;