import ProductsPlp from "../components/ProducstosPlp";
import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";

const ClothesContainer = () => {
    const {productCategoryClothes} = useGetProduct();
    const {categoryName} = useCategory();
    
    return <ProductsPlp 
        categoryName={categoryName[0]} 
        productCategoryShoes={productCategoryClothes} 
    />
};

export default ClothesContainer;