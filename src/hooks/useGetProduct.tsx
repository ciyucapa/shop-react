import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProduct = () => {
    const API = 'https://api.escuelajs.co/api/v1/products';
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

    const product = products.filter((product : any) => {
        if(product.images[0]) {
            return product
        }
    })

    return {
        product
    }
};

export default useGetProduct;