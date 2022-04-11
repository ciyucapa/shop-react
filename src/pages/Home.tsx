import ButtonField from "../components/atomos/ButtonField/Button"
import ProductList from "../components/ProductList"
import useGetProduct from "../hooks/useGetProduct"

const Home = () => {
    const {products} = useGetProduct()
    return(
        <div>
            <h1>Titulo</h1>
            <ButtonField text="BOTON" isIcon={true}  />
            <ProductList products={products}/>
        </div>
    )
}

export default Home