import useGetProduct from "../hooks/useGetProduct";
import ProductsPlp from "../components/ProducstosPlp";
import useCategory from "../hooks/useCategory";
import { productsMayor, productsMenor } from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const FurnitureContainer = () => {
    const { productCategory } = useGetProduct();
    const { categoryName } = useCategory();
    const { onVisible, visible } = useVisible();
    const hook1 = useVisible();
    const { eleccion, onEleccionMayor, onEleccionMenor } = useToggle();

    const productFurniture = productCategory('Furniture')
    const productFurnitureMenor = productCategory('Furniture')
    const productFurnitureMayor = productCategory('Furniture');
    const productClothes = productCategory('Clothes')
    const productElectronics = productCategory('Electronics')
    const productShoes = productCategory('Shoes');
    const productOthers = productCategory('Others');

    productFurnitureMenor.sort(productsMenor)
    productFurnitureMayor.sort(productsMayor)

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
        categoryName={categoryName[2]}
        productCategory={productFurniture}
        catProductOrderMayor={productFurnitureMayor}
        catProductsOrder={productFurnitureMenor}
        onVisible1={hook1.onVisible}
        visible1={hook1.visible}
    />
};

export default FurnitureContainer;