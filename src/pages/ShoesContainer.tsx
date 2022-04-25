import useGetProduct from "../hooks/useGetProduct";
import ProductList from "../components/ProductList";

const ShoesContainer = () => {
    const {productCategoryShoes} = useGetProduct()
    return <ProductList products={productCategoryShoes} />
};

export default ShoesContainer;