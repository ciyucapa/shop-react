import './index.css'
import CartMas from "../../assets/componentIcons/CartMas";
import { useContext } from "react";
import {ProductItemProps} from '../../interfaces';
import AppContext from '../../context';

const ProductItem = ({id, price, title, images, product}: ProductItemProps) => {
    const {addCart} = useContext(AppContext);

    const handleCart = (item: any) => {
        addCart(item)
    }

    return (
        <div className="product__container" key={id}>
            <div>
                <img src={images} alt="product" />
            </div>
            <div className="product__info">
                <span className="product__info--p">
                    <p className="product__info--title">${price}</p>
                    <p className="product__info--text">{title}</p>
                </span>
                <CartMas onClick={() => handleCart(product)}/>
            </div>
        </div>
    );
}

export default ProductItem