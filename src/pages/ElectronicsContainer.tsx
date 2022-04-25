import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";

const ElectronicsContainer = () => {
    const {productCategoryElectronics} = useGetProduct();
    const {categoryName} = useCategory();

    return <ProductsPlp 
        categoryName={categoryName[1]} 
        productCategoryShoes={productCategoryElectronics} 
    />
};

export default ElectronicsContainer;