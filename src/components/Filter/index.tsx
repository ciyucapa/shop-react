import './index.css';
import { IFilter } from '../../interfaces';
import CategoryMobile from './categoryMobile';
import AngleArrowDown from '../../assets/componentIcons/AngleArrowDown';

const Filter = ({ categoryName, productClothes, productElectronics, productFurniture, productOthers, productShoes, visible, onClick1 }: IFilter): JSX.Element => (
    <div className='container'>
        <div className='category__desktop'>
            <h1>Filter</h1>
            <CategoryMobile
                categoryName={categoryName}
                productClothes={productClothes}
                productElectronics={productElectronics}
                productFurniture={productFurniture}
                productOthers={productOthers}
                productShoes={productShoes}
            />
        </div>
        <div className='category__mobile'>
            <div className='category__mobilte--title'>
                <h1>Filter</h1>
                <AngleArrowDown onClick={onClick1} />
            </div>
            {visible && (
                <div className='category__mobile--menu'>
                    <CategoryMobile
                        categoryName={categoryName}
                        productClothes={productClothes}
                        productElectronics={productElectronics}
                        productFurniture={productFurniture}
                        productOthers={productOthers}
                        productShoes={productShoes}
                    />
                </div>
            )
            }
        </div>
    </div>
);

export default Filter;