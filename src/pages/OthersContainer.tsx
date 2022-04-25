import useGetProduct from "../hooks/useGetProduct";
import ProductList from "../components/ProductList";

const OthersContainers = () => {
    const {productCategoryOthers} = useGetProduct()
    return <ProductList products={productCategoryOthers} />
};

export default OthersContainers;