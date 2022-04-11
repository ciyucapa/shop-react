import { useState } from "react";
import CartMas from "../../assets/componentIcons/CartMas";
import Assets from "../../assets/assets";
import './index.css'

interface ProductItemProps {
    id: number
    price: number
    title: string
    image: string
}

const ProductItem = ({id, price, title, image}: ProductItemProps) => {
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        setCart([])
    }

    console.log("cart", cart)

    return (
        <div className="product__container" key={id}>
            <div>
                <img src={image} alt="product" />
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