import Logo from '../atomos/Logo';
import Navbar from '../atomos/Navbar';
import './header.css'

const Header = () =>  {
    return(
        <nav className='header__container'>
            <div className='header__container--sectionone'>
                <Logo/>
                <Navbar/>
            </div>
            <div className='header__container--sectionthree'>
                <span>Sign in</span>
                <img/>
            </div>

        </nav>
    )
};

export default Header;