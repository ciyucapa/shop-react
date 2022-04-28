import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";
import {productsMayor, productsMenor} from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const FurnitureContainer = () => {
    const {productCategory} = useGetProduct();
    const {categoryName} = useCategory();
    const {onVisible, visible} = useVisible();
    const {eleccion, onEleccionMayor, onEleccionMenor} = useToggle();

    const productFurniture = productCategory('Furniture')
    const productFurnitureMenor = productCategory('Furniture')
    const productFurnitureMayor = productCategory('Furniture');

    productFurnitureMenor.sort(productsMenor)
    productFurnitureMayor.sort(productsMayor)

    

    return <ProductsPlp 
        eleccion={eleccion}
        onEleccionMayor={onEleccionMayor}
        onEleccionMenor={onEleccionMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[2]} 
        productCategory={productFurniture} 
        catProductOrderMayor={productFurnitureMayor}
        catProductsOrder={productFurnitureMenor}
    />
};

export default FurnitureContainer;