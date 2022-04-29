import './menu.css'

interface IMenu {
    onClick: () => void
}

const Menu = ({onClick}: IMenu): JSX.Element => (
    <div className="menu__container">
        <div className="menu__list">
            <ul>
                <li><a href="/">My Orders</a></li>
                <li><a href="/" >My Account</a></li>
            </ul>
        </div>
        <div className='menu__sign'>
            <span className='menu__sign--border'></span>
            <span onClick={onClick}>Sign out</span>
        </div>
    </div>
);

export default Menu;