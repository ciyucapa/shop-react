import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";

const OthersContainers = () => {
    const {productCategoryOthers} = useGetProduct();
    const {categoryName} = useCategory();

    return <ProductsPlp 
                categoryName={categoryName[4]} 
                productCategoryShoes={productCategoryOthers} 
            />
};

export default OthersContainers;