import CategoryMenu from "../components/CategoryMenu";
import useCategory from "../hooks/useCategory";

const Home = () => {
    const { categories } = useCategory();
    return (
        <>
            <CategoryMenu categories={categories} />
        </>
    )
}

export default Home