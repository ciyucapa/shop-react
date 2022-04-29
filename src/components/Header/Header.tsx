import './header.css'

import useVisible from '../../hooks/useVisible';
import useCategory from '../../hooks/useCategory';

import Logo from '../atomos/Logo/Logo';
import Navbar from '../atomos/Navbar/Navbar';
import ShoppingToCart from '../../assets/componentIcons/ShoppingToCart';
import AngleArrowDown from '../../assets/componentIcons/AngleArrowDown';
import Menu from '../Menu/Menu';
import { useContext } from 'react';
import AppContext from '../../context';
import MyOrder from '../../containers/MyOrder';
import useLogin from '../../hooks/useLogin';

const Header = () =>  {
    const {onVisible, visible} = useVisible();
    const {state: {cart}} = useContext(AppContext);
    const hookVisible = useVisible();
    const {categories} = useCategory();
    const {user, handleLogout} = useLogin()
    
    console.log("userHeader", user)
    
    return(
        <nav className='header__container'>
            <div className='header__container--sectionone'>
                <Logo/>
                <Navbar categories={categories}/>
            </div>
            <div className='header__container--sectionthree'>
                {user === null ? <span className='header__sign' >Sign in</span> : (
                    <span className='header__email'>
                    <p>cindycaceres134@gmail.com</p>
                    <AngleArrowDown onClick={onVisible}/>
                    {visible && <Menu onClick={handleLogout}/>}
                </span>
                )}
                <div className='header__cart' onClick={hookVisible.onVisible}>
                    <ShoppingToCart/>
                    {cart.length > 0 ? <div className='header__cart--text'>{cart.length}</div> : null}
                </div>
                <>
                    {hookVisible.visible && <MyOrder/>}
                </>
            </div>

        </nav>
    )
};

export default Header;