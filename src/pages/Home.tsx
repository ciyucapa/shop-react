import ProductList from '../components/ProductList'
import useGetProduct from '../hooks/useGetProduct'

const Home = () => {
    const {product} = useGetProduct();
    return(
        <div>
            <ProductList products={product}/>
        </div>
    )
}

export default Home