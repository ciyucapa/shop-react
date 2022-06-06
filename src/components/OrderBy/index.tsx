import './index.css';
import AngleArrowDown from "../../assets/componentIcons/AngleArrowDown";
import { IOrderBy } from '../../interfaces'

const OrderBy = ({ visible, onClick, onClickMayor, onClickMenor}: IOrderBy) : JSX.Element => (
    <>
        <div className="orderby__container">
            <p>Order by:</p>
            <AngleArrowDown onClick={onClick} />
        </div>
        {visible && (
            <div className="orderby_list--menu">
                <span className="list__one" onClick={onClickMayor}>Mayor precio</span>
                <span onClick={onClickMenor}>Menor precio</span>
            </div>
        )}
    </>
);

export default OrderBy;