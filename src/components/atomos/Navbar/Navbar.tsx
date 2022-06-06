import './navbar.css'
import { INavbar } from '../../../interfaces'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import HamburguesaMenu from '../../../assets/componentIcons/HamburguesaMenu';

const Navbar = ({categories, isVisible, onClick}: INavbar): JSX.Element => (
    <div className='navbar__container'>
        <div className='navbar__list'>
            <div className='navbar__list--one'>All</div>
            {categories.slice(0, 5).map(({name, id}) => 
               <Fragment key={id}>
                    <Link to={name}><div key={id}>{name}</div></Link>
               </Fragment>
            )}
        </div>
        <div onClick={onClick} className='mobile'>
            <HamburguesaMenu/>
        </div>
       {isVisible && (
           <div className='menu__mobile'>
               {categories.slice(0, 5).map(({name, id}) => 
               <Fragment key={id}>
                    <Link to={name}><div key={id}>{name}</div></Link>
               </Fragment>
            )}
           </div>
       )}
        
    </div>
)

export default Navbar;