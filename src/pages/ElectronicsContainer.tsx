import useGetProduct from "../hooks/useGetProduct";
import ProductList from "../components/ProductList";

const ElectronicsContainer = () => {
    const {productCategoryElectronics} = useGetProduct()
    return <ProductList products={productCategoryElectronics} />
};

export default ElectronicsContainer;