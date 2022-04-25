import ProductList from '../ProductList'
import {IProductosPlp} from '../../interfaces';
import './index.css'
import Filter from '../Filter';


const ProductsPlp = ({categoryName, productCategoryShoes}: IProductosPlp) => {
    return (
        <div>
            <div>
                <h1 className='title'>{categoryName}</h1>
                <p className='total'>{productCategoryShoes.length} Resultados</p>
            </div>
            <div className='section'>
                <Filter/>
                <ProductList products={productCategoryShoes} />
            </div>
        </div>
    )
};

export default ProductsPlp