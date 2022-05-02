import useUser from "../hooks/useUser";
import useGetProduct from "../hooks/useGetProduct";
import CategoryMenu from "../components/CategoryMenu";
import useCategory from "../hooks/useCategory";

const Home = () => {
    /* const {users} = useUser();
     const {productNuevo} = useGetProduct()
     console.log("usuaris", users)
     console.log("productNuevo", productNuevo)*/
    const { categories } = useCategory();
    console.log("categories", categories)
    return (
        <>
            <CategoryMenu categories={categories} />
        </>
    )
}

export default Home