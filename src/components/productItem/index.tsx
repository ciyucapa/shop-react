import { useState } from "react";
import CartMas from "../../assets/componentIcons/CartMas";
import Assets from "../../assets/assets";
import './index.css'

const ProductItem = () => {
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        setCart([])
    }

    console.log("cart", cart)

    return (
        <div className="product__container">
            <img src={Assets.product} alt="product" />
            <div className="product__info">
                <span className="product__info--p">
                    <p className="product__info--title">$120.00</p>
                    <p className="product__info--text">Bike</p>
                </span>
                <CartMas onClick={handleCart}/>
            </div>
        </div>
    );
}

export default ProductItem