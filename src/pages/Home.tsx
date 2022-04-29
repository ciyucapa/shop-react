import useUser from "../hooks/useUser";
import useGetProduct from "../hooks/useGetProduct";

const Home = () => {
    const {users} = useUser();
    const {productNuevo} = useGetProduct()
    console.log("usuaris", users)
    console.log("productNuevo", productNuevo)
    return(
        <div>
            Home
        </div>
    )
}

export default Home