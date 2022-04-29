import { useEffect, useState, useMemo } from "react";
import { ProductItemProps} from "../interfaces";
import { getProduct } from '../services';

const useGetProduct = () => {
    const [products, setProducts] = useState<ProductItemProps[]>([]);

    const onProduct = (dataProduct: ProductItemProps[]) => {
        setProducts(dataProduct)
    }

    useEffect(() => {
        getProduct(onProduct)
    }, [])

    const productNuevo = useMemo(() => {
        return products.filter((products : ProductItemProps) => {
            if(products.images[0] && products.id) {
                return products
            }
    
            return []
        })
    }, [products]);

    const productCategory = (categoria: string) => {
        return productNuevo.filter(({category}: ProductItemProps) => category?.name === categoria);
    }
        
    return {
        productNuevo,
        productCategory
    }
};

export default useGetProduct;