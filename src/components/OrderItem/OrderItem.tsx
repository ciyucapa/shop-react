import './index.css'
import { ProductItemProps } from '../../interfaces';
import Close from '../../assets/componentIcons/Close';

const OrderItem = ({ id, images, price, title, deleteC }: ProductItemProps): JSX.Element => (
    <div className='orderItem__container' key={id}>
        <div className='orderItem__container--box'>
            <div className='orderItem__container--sectionone'>
                <img src={images} alt="producto" />
                <p>{title}</p>
            </div>
            <div className='orderItem__container--sectiontwo'>
                <p>$ {price}</p>
            </div>
            <Close onClick={deleteC} />
        </div>
    </div>
)

export default OrderItem;