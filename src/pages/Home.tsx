import ButtonField from "../components/atomos/ButtonField/Button"
import ProductItem from "../components/productItem"
import ProductList from "../components/ProductList"

const Home = () => {
    return(
        <div>
            <h1>Titulo</h1>
            <ButtonField text="BOTON" isIcon={true}  />
            <ProductList/>
        </div>
    )
}

export default Home