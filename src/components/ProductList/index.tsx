import './index.css'

import ProductItem from "../productItem";

import {ProductListProps} from '../../interfaces';

const ProductList = ({products}: ProductListProps) => {
    return (
        <section className="productList__container">
            <div className="productList__list">
                {products.map(({id, title, price, images}) => (
                        <div className="colum" key={id}>
                            <ProductItem id={id} price={price} title={title} images={images[0]} />
                        </div>
                    ))}
            </div>
        </section>
    )
};

export default ProductList;