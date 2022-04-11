import './index.css'
import CartMas from "../../assets/componentIcons/CartMas";
import { useState } from "react";
import {ProductItemProps} from '../../interfaces'

const ProductItem = ({id, price, title, images}: ProductItemProps) => {
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        setCart([])
    }

    console.log("cart", cart)

    return (
        <div className="product__container" key={id}>
            <div>
                <img src={images} alt="product" />
            </div>
            <div className="product__info">
                <span className="product__info--p">
                    <p className="product__info--title">{price}</p>
                    <p className="product__info--text">{title}</p>
                </span>
                <CartMas onClick={handleCart}/>
            </div>
        </div>
    );
}

export default ProductItem