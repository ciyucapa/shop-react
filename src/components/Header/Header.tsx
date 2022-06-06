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
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import useLogin from '../../hooks/useLogin';

const Header = () => {
    const { onVisible, visible } = useVisible();
    const { state: { cart } } = useContext(AppContext);
    const { userLogin, userRegister } = useContext(AuthContext);
    const hookVisible = useVisible();
    const hookVisible1 = useVisible();
    const hookVisibleNavbar = useVisible();
    const { categories } = useCategory();
    const { handleLogout } = useLogin();

    return (
        <nav className='header__container'>
            <div className='header__container--sectionone'>
                <Logo />
                <Navbar
                    categories={categories}
                    isVisible={hookVisibleNavbar.visible}
                    onClick={hookVisibleNavbar.onVisible}
                />
            </div>
            <div className='header__container--sectionthree'>
                {userRegister?.email !== '' ? '' : (
                    <>
                        {userLogin?.email === '' && userLogin?.password === '' ? <Link to={'/login'}><span className='header__sign'>Login</span></Link> : (
                            <span className='header__email'>
                                <p>{userLogin?.email}</p>
                                <AngleArrowDown onClick={onVisible} />
                                {visible && <Menu onClick={handleLogout} />}
                            </span>
                        )}
                    </>
                )}
                {userLogin?.email !== '' ? '' : (
                    <>
                        {userRegister?.email === '' ? <Link to={'/my-account'}><span className='header__sign'>Sign in</span></Link> : (
                            <span className='header__email'>
                                <p>{userRegister?.name}</p>
                                <AngleArrowDown onClick={hookVisible1.onVisible} />
                                {hookVisible1.visible && <Menu onClick={handleLogout} />}
                            </span>
                        )}
                    </>
                )}
                <div className='header__cart' onClick={hookVisible.onVisible}>
                    <ShoppingToCart />
                    {cart.length > 0 ? <div className='header__cart--text'>{cart.length}</div> : null}
                </div>
                <>
                    {hookVisible.visible && <MyOrder />}
                </>
            </div>

        </nav>
    )
};

export default Header;