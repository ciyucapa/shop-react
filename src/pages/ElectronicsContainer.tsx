import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";
import { productsMayor, productsMenor } from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ElectronicsContainer = () => {
    const { productCategory } = useGetProduct();
    const { categoryName } = useCategory();
    const { onVisible, visible } = useVisible();
    const { eleccion, onEleccionMayor, onEleccionMenor } = useToggle();

    const productElectronics = productCategory('Electronics')
    const productElectronicsMenor = productCategory('Electronics')
    const productElectronicsMayor = productCategory('Electronics');
    const productClothes = productCategory('Clothes')
    const productFurniture = productCategory('Furniture');
    const productShoes = productCategory('Shoes');
    const productOthers = productCategory('Others');

    productElectronicsMenor.sort(productsMenor)
    productElectronicsMayor.sort(productsMayor)

    return <ProductsPlp
        productElectronics={productElectronics}
        productFurniture={productFurniture}
        productOthers={productOthers}
        productShoes={productShoes}
        productClothes={productClothes}
        categoryName1={categoryName}
        eleccion={eleccion}
        onEleccionMayor={onEleccionMayor}
        onEleccionMenor={onEleccionMenor}
        onVisible={onVisible}
        visible={visible}
        categoryName={categoryName[1]}
        productCategory={productElectronics}
        catProductOrderMayor={productElectronicsMayor}
        catProductsOrder={productElectronicsMenor}
    />
};

export default ElectronicsContainer;