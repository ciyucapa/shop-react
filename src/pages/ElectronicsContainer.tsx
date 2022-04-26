import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";
import {productsMayor, productsMenor} from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ElectronicsContainer = () => {
    const {productCategoryElectronics} = useGetProduct();
    const {productCategoryElectronics: productMenor} = useGetProduct();
    const {productCategoryElectronics: productMayor} = useGetProduct();
    const {categoryName} = useCategory();
    const {onVisible, visible} = useVisible();
    const {mayor, menor, onMayor, onMenor} = useToggle();

    productMenor.sort(productsMenor)
    productMayor.sort(productsMayor)

    return <ProductsPlp 
        mayor={mayor}
        menor={menor}
        onMayor={onMayor}
        onMenor={onMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[1]} 
        productCategory={productCategoryElectronics}
        catProductOrderMayor={productMayor}
        catProductsOrder={productMenor}
    />
};

export default ElectronicsContainer;