import './index.css'
import Filter from '../Filter';
import OrderBy from '../OrderBy';
import ProductList from '../ProductList'
import { IProductosPlp } from '../../interfaces';

const ProductsPlp = ({
    productClothes,
    productElectronics,
    productFurniture,
    productShoes,
    productOthers,
    categoryName,
    categoryName1,
    productCategory,
    catProductsOrder,
    catProductOrderMayor,
    onVisible,
    visible,
    onVisible1,
    visible1,
    eleccion,
    onEleccionMenor,
    onEleccionMayor,
}: IProductosPlp): JSX.Element => {
    return (
        <div>
            <>
                <h1 className='title'>{categoryName}</h1>
                <p className='total'>{productCategory?.length} Resultados</p>
            </>
            <section className='orderBy'>
                <OrderBy
                    visible={visible}
                    onClick={onVisible}
                    onClickMayor={onEleccionMayor}
                    onClickMenor={onEleccionMenor}
                />
            </section>
            <section className='section'>
                <Filter
                    categoryName={categoryName1}
                    productClothes={productClothes}
                    productElectronics={productElectronics}
                    productFurniture={productFurniture}
                    productOthers={productOthers}
                    productShoes={productShoes}
                    onClick1={onVisible1}
                    visible={visible1}
                />
                {!eleccion.menor && !eleccion.mayor && <ProductList products={productCategory} />}
                {eleccion.menor && <ProductList products={catProductsOrder} />}
                {eleccion.mayor && <ProductList products={catProductOrderMayor} />}
            </section>
        </div>
    )
};

export default ProductsPlp;
