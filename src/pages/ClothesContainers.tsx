import ProductsPlp from "../components/ProducstosPlp";
import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import { productsMenor, productsMayor } from "../utils/functions";
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ClothesContainer = () => {
    const { productCategory } = useGetProduct();
    const { categoryName } = useCategory();
    const { onVisible, visible } = useVisible();
    const { eleccion, onEleccionMayor, onEleccionMenor } = useToggle();
    const productClothes = productCategory('Clothes')
    const productClothesMenor = productCategory('Clothes')
    const productClothesMayor = productCategory('Clothes');
    const productElectronics = productCategory('Electronics');
    const productFurniture = productCategory('Furniture');
    const productShoes = productCategory('Shoes');
    const productOthers = productCategory('Others');

    productClothesMenor.sort(productsMenor);
    productClothesMayor.sort(productsMayor)

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
        categoryName={categoryName[0]}
        productCategory={productClothes}
        catProductsOrder={productClothesMenor}
        catProductOrderMayor={productClothesMayor}
    />
};

export default ClothesContainer;