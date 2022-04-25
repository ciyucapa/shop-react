import useGetProduct from "../hooks/useGetProduct";
import ProductList from "../components/ProductList";

const FurnitureContainer = () => {
    const {productCategoryFurniture} = useGetProduct()
    return <ProductList products={productCategoryFurniture} />
};

export default FurnitureContainer;