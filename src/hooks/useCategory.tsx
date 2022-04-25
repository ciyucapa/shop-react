import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {

    const API = 'https://api.escuelajs.co/api/v1/categories';
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getProduct = async() => {
            const response = await axios(API);
            if(response) {
                setCategories(response.data)
            }
        }
        getProduct()
    }, [])
    
    return {
        categories,
    };
};

export default useCategory;