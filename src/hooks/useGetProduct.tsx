import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import { ProductItemProps} from "../interfaces";

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

    const productNuevo = useMemo(() => {
        return products.filter((products : ProductItemProps) => {
            if(products.images[0] && products.id) {
                return products
            }
    
            return []
        })
    }, [products]);
    
    const productCategoryClothes = productNuevo.filter(({category}: ProductItemProps) => category?.name === 'Clothes');
    
    const productCategoryElectronics = productNuevo.filter(({category}: ProductItemProps) => category?.name === 'Electronics');

    const productCategoryFurniture = productNuevo.filter(({category}: ProductItemProps) => category?.name === 'Furniture');
    
    const productCategoryShoes = productNuevo.filter(({category}: ProductItemProps) => category?.name === 'Shoes');
    
    const productCategoryOthers = productNuevo.filter(({category}: ProductItemProps) => category?.name === 'Others');
        
    return {
        productNuevo,
        productCategoryClothes,
        productCategoryElectronics,
        productCategoryFurniture,
        productCategoryShoes,
        productCategoryOthers
    }
};

export default useGetProduct;