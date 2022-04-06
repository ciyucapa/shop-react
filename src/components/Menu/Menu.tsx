import './menu.css'

const Menu = () => {
    return(
        <div className="menu__container">
            <ul>
                <li><a href="/">My Orders</a></li>
                <li><a href="/" >My Account</a></li>
                <li><a href="/" >Sign out</a></li>
            </ul>
        </div>
    )
};

export default Menu;