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
    const {eleccion, onEleccionMayor, onEleccionMenor} = useToggle();

    productMenor.sort(productsMenor);
    productMayor.sort(productsMayor)
    
    return <ProductsPlp 
        eleccion={eleccion}
        onEleccionMayor={onEleccionMayor}
        onEleccionMenor={onEleccionMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[0]} 
        productCategory={productCategoryClothes}
        catProductsOrder={productMenor}
        catProductOrderMayor={productMayor}
    />
};

export default ClothesContainer;