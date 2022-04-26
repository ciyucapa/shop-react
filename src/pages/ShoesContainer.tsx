import useGetProduct from "../hooks/useGetProduct";
import useCategory from "../hooks/useCategory";
import ProductsPlp from "../components/ProducstosPlp";
import {productsMayor, productsMenor} from '../utils/functions';
import useVisible from "../hooks/useVisible";
import useToggle from "../hooks/useToggle";

const ShoesContainer = () => {
    const {productCategoryShoes} = useGetProduct();
    const {productCategoryShoes: productMenor} = useGetProduct();
    const {productCategoryShoes: productMayor} = useGetProduct();
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
            categoryName={categoryName[3]} 
            productCategory={productCategoryShoes} 
            catProductOrderMayor={productMayor}
            catProductsOrder={productMenor}
    />
      
};

export default ShoesContainer;