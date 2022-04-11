import './index.css'

import ProductItem from "../productItem";

import {ProductListProps} from '../../interfaces';

const ProductList = ({products}: ProductListProps) => {
    return (
        <section className="productList__container">
            <div className="productList__list">
                {products.map((product) => (
                    <div className="colum" key={product.id}>
                        <ProductItem 
                            id={product.id} 
                            price={product.price} 
                            title={product.title} 
                            images={product.images[0]} 
                            product={product}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
};

export default ProductList;