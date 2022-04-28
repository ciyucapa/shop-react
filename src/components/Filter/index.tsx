import './index.css';
import useCategory from '../../hooks/useCategory';
import useGetProduct from '../../hooks/useGetProduct';


const Filter = () => {
    const { categoryName } = useCategory();
    const {
        productCategory
    } = useGetProduct();

    const productClothes = productCategory('Clothes');
    const productElectronics = productCategory('Electronics');
    const productFurniture = productCategory('Furniture');
    const productShoes = productCategory('Shoes');
    const productOthers = productCategory('Others');

    return (
        <div className='container'>
            <h1>Filter</h1>
            <section>
                <p className='categoria'>Categories</p>
                <a href='/Clothes'>
                    <span> {categoryName[0]} </span>
                    <p className='lenght'>({productClothes.length}) </p>
                </a>
                <a href='/Electronics' >
                    <span> {categoryName[1]} </span>
                    <p className='lenght'>({productElectronics.length}) </p>
                </a >
                <a href='/Furniture'>
                    <span> {categoryName[2]} </span>
                    <p className='lenght'>({productFurniture.length}) </p>
                </a>
                <a href='/Shoes'>
                    <span> {categoryName[3]} </span>
                    <p className='lenght'>({productShoes.length}) </p>
                </a>
                <a href='/Others'>
                    <span> {categoryName[4]} </span>
                    <p className='lenght'>({productOthers.length}) </p>
                </a>
            </section>
        </div>

    )
};

export default Filter;