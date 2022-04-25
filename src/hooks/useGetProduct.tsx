import { useEffect, useState } from "react";
import axios from 'axios';
import { ProductItemProps } from "../interfaces";

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

        return []
    })

    const productCategoryClothes = product.filter(({category}: ProductItemProps) => category?.name === 'Clothes')
    
    const productCategoryElectronics = product.filter(({category}: ProductItemProps) => category?.name === 'Electronics')

    const productCategoryFurniture = product.filter(({category}: ProductItemProps) => category?.name === 'Furniture')
    
    const productCategoryShoes = product.filter(({category}: ProductItemProps) => category?.name === 'Shoes')
    
    const productCategoryOthers = product.filter(({category}: ProductItemProps) => category?.name === 'Others')
        
    return {
        product,
        productCategoryClothes,
        productCategoryElectronics,
        productCategoryFurniture,
        productCategoryShoes,
        productCategoryOthers
    }
};

export default useGetProduct;