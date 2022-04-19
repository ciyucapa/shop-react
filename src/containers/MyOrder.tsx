import LeftArrow from "../assets/componentIcons/LeftArrow";
import ButtonField from "../components/atomos/ButtonField/Button";
import OrderItem from "../components/OrderItem/OrderItem";
import '../styles/myOrder.css';
import { useContext } from "react";
import AppContext from '../context';
import { ProductItemProps } from "../interfaces";

const MyOrder = () => {
    const {state} = useContext(AppContext);

    return (
        <aside className="container__myorder">
            <div className="myorder__title">
                <LeftArrow/>
                <p>Shopping cart</p>
            </div>
            <div className="myorder__content">
                {state.cart.map( ({id, price, title, images}:ProductItemProps) => (
                    <OrderItem id={id} images={images[0]} price={price} title={title} key={id} />
                ))}
                <div className="myorder__content--total">
                    <p>Total</p>
                    <p>$560.00</p>
                </div>
                <ButtonField text="Checkout" isIcon={false}/>
            </div>
        </aside>
    )
}

export default MyOrder;