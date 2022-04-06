import './index.css'
import Assets from '../../assets/assets'

const OrderItem = () => {
    return(
        <div className='orderItem__container'>
            <div className='orderItem__container--box'>
                <div className='orderItem__container--sectionone'>
                    <img src={Assets.emailIcon} alt="producto" />
                    <p>Round Shelf</p>
                </div>
                <div className='orderItem__container--sectiontwo'>
                    <p>$ 120.00</p>
                </div>
            </div>
        </div>
    )
}

export default OrderItem