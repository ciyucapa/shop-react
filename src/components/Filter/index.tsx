import './index.css';
import useCategory from '../../hooks/useCategory';
import useGetProduct from '../../hooks/useGetProduct';


const Filter = () => {
    const { categoryName } = useCategory();
    const {
        productCategoryClothes,
        productCategoryElectronics,
        productCategoryFurniture,
        productCategoryOthers,
        productCategoryShoes
    } = useGetProduct();

    return (
        <div className='container'>
            <h1>Filter</h1>
            <section>
                <p className='categoria'>Categories</p>
                <a href='/Clothes'>
                    <span> {categoryName[0]} </span>
                    <p className='lenght'>({productCategoryClothes.length}) </p>
                </a>
                <a href='/Electronics' >
                    <span> {categoryName[1]} </span>
                    <p className='lenght'>({productCategoryElectronics.length}) </p>
                </a >
                <a href='/Furniture'>
                    <span> {categoryName[2]} </span>
                    <p className='lenght'>({productCategoryFurniture.length}) </p>
                </a>
                <a href='/Shoes'>
                    <span> {categoryName[3]} </span>
                    <p className='lenght'>({productCategoryShoes.length}) </p>
                </a>
                <a href='/Others'>
                    <span> {categoryName[4]} </span>
                    <p className='lenght'>({productCategoryOthers.length}) </p>
                </a>
            </section>
        </div>

    )
};

export default Filter;