import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";
import { productsMayor, productsMenor } from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ShoesContainer = () => {
    const { productCategory } = useGetProduct();
    const { categoryName } = useCategory();
    const { onVisible, visible } = useVisible();
    const hook1 = useVisible();
    const { eleccion, onEleccionMayor, onEleccionMenor } = useToggle();

    const productShoes = productCategory('Shoes')
    const productShoesMenor = productCategory('Shoes')
    const productShoesMayor = productCategory('Shoes');
    const productClothes = productCategory('Clothes')
    const productElectronics = productCategory('Electronics')
    const productOthers = productCategory('Others')
    const productFurniture = productCategory('Furniture')

    productShoesMenor.sort(productsMenor)
    productShoesMayor.sort(productsMayor)

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
        categoryName={categoryName[3]}
        productCategory={productShoes}
        catProductOrderMayor={productShoesMayor}
        catProductsOrder={productShoesMenor}
        onVisible1={hook1.onVisible}
        visible1={hook1.visible}
    />

};

export default ShoesContainer;