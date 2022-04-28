import './index.css';
import { IFilter } from '../../interfaces';

const Filter = ({ categoryName, productClothes, productElectronics, productFurniture, productOthers, productShoes }: IFilter): JSX.Element => (
    <div className='container'>
        <h1>Filter</h1>
        <section>
            <p className='categoria'>Categories</p>
            <a href='/Clothes'>
                <span> {categoryName[0]} </span>
                <p className='lenght'>({productClothes?.length}) </p>
            </a>
            <a href='/Electronics' >
                <span> {categoryName[1]} </span>
                <p className='lenght'>({productElectronics?.length}) </p>
            </a >
            <a href='/Furniture'>
                <span> {categoryName[2]} </span>
                <p className='lenght'>({productFurniture?.length}) </p>
            </a>
            <a href='/Shoes'>
                <span> {categoryName[3]} </span>
                <p className='lenght'>({productShoes?.length}) </p>
            </a>
            <a href='/Others'>
                <span> {categoryName[4]} </span>
                <p className='lenght'>({productOthers?.length}) </p>
            </a>
        </section>
    </div>

);

export default Filter;