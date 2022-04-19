import './index.css'
import { ProductItemProps } from '../../interfaces';

const OrderItem = ({id, images, price, title}:ProductItemProps) => {
    return(
        <div className='orderItem__container' key={id}>
            <div className='orderItem__container--box'>
                <div className='orderItem__container--sectionone'>
                    <img src={images} alt="producto" />
                    <p>{title}</p>
                </div>
                <div className='orderItem__container--sectiontwo'>
                    <p>$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderItem