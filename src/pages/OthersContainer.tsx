import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";
import {productsMayor, productsMenor} from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const OthersContainers = () => {
    const {productCategoryOthers} = useGetProduct();
    const {productCategoryOthers: productMenor} = useGetProduct();
    const {productCategoryOthers: productMayor} = useGetProduct();
    const {categoryName} = useCategory();
    const {onVisible, visible} = useVisible();
    const {eleccion, onEleccionMayor,  onEleccionMenor} = useToggle();

    productMenor.sort(productsMenor)
    productMayor.sort(productsMayor)

    return <ProductsPlp 
    eleccion={eleccion}
    onEleccionMayor={onEleccionMayor}
    onEleccionMenor={onEleccionMenor}
            onVisible={onVisible}
            visible={visible}
            categoryName={categoryName[4]} 
            productCategory={productCategoryOthers} 
            catProductOrderMayor={productMayor}
            catProductsOrder={productMenor}
    />
};

export default OthersContainers;