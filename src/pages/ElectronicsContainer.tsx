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
    const {eleccion, onEleccionMayor, onEleccionMenor} = useToggle();

    productMenor.sort(productsMenor)
    productMayor.sort(productsMayor)

    return <ProductsPlp 
        eleccion={eleccion}
        onEleccionMayor={onEleccionMayor}
        onEleccionMenor={onEleccionMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[1]} 
        productCategory={productCategoryElectronics}
        catProductOrderMayor={productMayor}
        catProductsOrder={productMenor}
    />
};

export default ElectronicsContainer;