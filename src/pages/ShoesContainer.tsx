import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";
import {productsMayor, productsMenor} from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ShoesContainer = () => {
    const {productCategory} = useGetProduct();
    const {categoryName} = useCategory();
    const {onVisible, visible} = useVisible();
    const {eleccion, onEleccionMayor, onEleccionMenor} = useToggle();

    const productShoes = productCategory('Shoes')
    const productShoesMenor = productCategory('Shoes')
    const productShoesMayor = productCategory('Shoes');

    productShoesMenor.sort(productsMenor)
    productShoesMayor.sort(productsMayor)

     return <ProductsPlp 
            eleccion={eleccion}
            onEleccionMayor={onEleccionMayor}
            onEleccionMenor={onEleccionMenor}
            onVisible={onVisible}
            visible={visible}
            categoryName={categoryName[3]} 
            productCategory={productShoes} 
            catProductOrderMayor={productShoesMayor}
            catProductsOrder={productShoesMenor}
    />
      
};

export default ShoesContainer;