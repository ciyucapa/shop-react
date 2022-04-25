import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";

const FurnitureContainer = () => {
    const {productCategoryFurniture} = useGetProduct();
    const {categoryName} = useCategory();

    return <ProductsPlp 
        categoryName={categoryName[2]} 
        productCategoryShoes={productCategoryFurniture} 
    />
};

export default FurnitureContainer;