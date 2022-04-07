import './header.css'

import Logo from '../atomos/Logo/Logo';
import Navbar from '../atomos/Navbar/Navbar';
import ShoppingToCart from '../../assets/componentIcons/ShoppingToCart';
import AngleArrowDown from '../../assets/componentIcons/AngleArrowDown';

const Header = () =>  {
    return(
        <nav className='header__container'>
            <div className='header__container--sectionone'>
                <Logo/>
                <Navbar/>
            </div>
            <div className='header__container--sectionthree'>
                <span>Sign in</span>
                <span className='header__email'>
                    <p>cindycaceres134@gmail.com</p>
                    <AngleArrowDown/>
                </span>
                <ShoppingToCart/>
            </div>

        </nav>
    )
};

export default Header;