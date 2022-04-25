import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";

const ShoesContainer = () => {
    const {productCategoryShoes} = useGetProduct();
    const {categoryName} = useCategory();

     return <ProductsPlp 
                categoryName={categoryName[3]} 
                productCategoryShoes={productCategoryShoes} 
            />
      
};

export default ShoesContainer;