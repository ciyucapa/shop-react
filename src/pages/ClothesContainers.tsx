import ProductsPlp from "../components/ProducstosPlp";
import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import { productsMenor, productsMayor } from "../utils/functions";
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ClothesContainer = () => {
    const {productCategoryClothes} = useGetProduct();
    const {productCategoryClothes: productMenor} = useGetProduct();
    const {productCategoryClothes: productMayor} = useGetProduct();
    const {categoryName} = useCategory();
    const {onVisible, visible} = useVisible();
    const {mayor, menor, onMayor, onMenor} = useToggle();

    productMenor.sort(productsMenor);
    productMayor.sort(productsMayor)
    
    return <ProductsPlp 
        mayor={mayor}
        menor={menor}
        onMayor={onMayor}
        onMenor={onMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[0]} 
        productCategory={productCategoryClothes}
        catProductsOrder={productMenor}
        catProductOrderMayor={productMayor}
    />
};

export default ClothesContainer;