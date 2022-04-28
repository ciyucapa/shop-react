import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";
import { productsMayor, productsMenor } from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const OthersContainers = () => {
    const { productCategory } = useGetProduct();
    const { categoryName } = useCategory();
    const { onVisible, visible } = useVisible();
    const { eleccion, onEleccionMayor, onEleccionMenor } = useToggle();

    const productOthers = productCategory('Others')
    const productOthersMenor = productCategory('Others')
    const productOthersMayor = productCategory('Others');
    const productClothes = productCategory('Clothes')
    const productElectronics = productCategory('Electronics')
    const productShoes = productCategory('Shoes');
    const productFurniture = productCategory('Furniture')

    productOthersMenor.sort(productsMenor)
    productOthersMayor.sort(productsMayor)

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
        categoryName={categoryName[4]}
        productCategory={productOthers}
        catProductOrderMayor={productOthersMayor}
        catProductsOrder={productOthersMenor}
    />
};

export default OthersContainers;