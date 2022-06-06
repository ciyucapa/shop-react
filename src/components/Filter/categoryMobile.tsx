import { IFilter } from '../../interfaces';

const CategoryMobile = ({categoryName,  productClothes, productElectronics, productFurniture, productShoes, productOthers }: IFilter ) => (
    <section>
            <p className='categoria'>Categories</p>
            <a href={categoryName[0]}>
                <span> {categoryName[0]} </span>
                <p className='lenght'>({productClothes?.length}) </p>
            </a>
            <a href={categoryName[1]}>
                <span> {categoryName[1]} </span>
                <p className='lenght'>({productElectronics?.length}) </p>
            </a >
            <a href={categoryName[2]}>
                <span> {categoryName[2]} </span>
                <p className='lenght'>({productFurniture?.length}) </p>
            </a>
            <a href={categoryName[3]}>
                <span> {categoryName[3]} </span>
                <p className='lenght'>({productShoes?.length}) </p>
            </a>
            <a href={categoryName[4]}>
                <span> {categoryName[4]} </span>
                <p className='lenght'>({productOthers?.length}) </p>
            </a>
    </section>
)

export default CategoryMobile;