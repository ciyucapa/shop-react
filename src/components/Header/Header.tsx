import './header.css'

import useVisible from '../../hooks/useVisible';

import Logo from '../atomos/Logo/Logo';
import Navbar from '../atomos/Navbar/Navbar';
import ShoppingToCart from '../../assets/componentIcons/ShoppingToCart';
import AngleArrowDown from '../../assets/componentIcons/AngleArrowDown';
import Menu from '../Menu/Menu';

const Header = () =>  {
    const {onVisible, visible} = useVisible()
    return(
        <nav className='header__container'>
            <div className='header__container--sectionone'>
                <Logo/>
                <Navbar/>
            </div>
            <div className='header__container--sectionthree'>
                <span className='header__sign' >Sign in</span>
                <span className='header__email'>
                    <p>cindycaceres134@gmail.com</p>
                    <AngleArrowDown onClick={onVisible}/>
                    {visible && <Menu/>}
                </span>
                <ShoppingToCart/>
            </div>

        </nav>
    )
};

export default Header;