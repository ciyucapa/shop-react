//import Assets from "../assets/assets"
import ButtonField from "../components/atomos/ButtonField/Button"
import CartMas from "../assets/componentIcons/CartMas"
import ProductItem from "../components/productItem"

const Home = () => {
    return(
        <div>
            <h1>Titulo</h1>
            <ButtonField text="BOTON" isIcon={true}  />
            <ProductItem/>
            <ProductItem/>
        </div>
    )
}

export default Home