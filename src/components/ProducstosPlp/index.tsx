import './index.css'
import Filter from '../Filter';
import OrderBy from '../OrderBy';
import ProductList from '../ProductList'
import { IProductosPlp } from '../../interfaces';

const ProductsPlp = ({
    categoryName,
    productCategory,
    catProductsOrder,
    catProductOrderMayor,
    onVisible,
    visible,
    onMayor,
    onMenor,
    menor,
    mayor
}: IProductosPlp): JSX.Element => (
    <div>
        <div>
            <h1 className='title'>{categoryName}</h1>
            <p className='total'>{productCategory?.length} Resultados</p>
        </div>
        <div className='orderBy'>
            <OrderBy visible={visible} onClick={onVisible} onClickMayor={onMayor} onClickMenor={onMenor} />
        </div>
        <div className='section'>
            <Filter />
            {!menor && !mayor && <ProductList products={productCategory} />}
            {menor && <ProductList products={catProductsOrder} />}
            {mayor && <ProductList products={catProductOrderMayor} />}
        </div>
    </div>
);

export default ProductsPlp;