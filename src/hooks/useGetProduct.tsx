import { useEffect, useState, useMemo } from "react";
import { ProductItemProps} from "../interfaces";
import { getProduct } from '../services';

const useGetProduct = () => {
    const [products, setProducts] = useState<ProductItemProps[]>([]);

    useEffect(() => {
        getProduct(setProducts)
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