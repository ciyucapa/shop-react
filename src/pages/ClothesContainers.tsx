import ProductList from "../components/ProductList";
import useGetProduct from "../hooks/useGetProduct";

const ClothesContainer = () => {
    const {productCategoryClothes} = useGetProduct();
    return <ProductList products={productCategoryClothes} />
};

export default ClothesContainer;