import './navbar.css'
import { INavbar } from '../../../interfaces'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navbar = ({categories}: INavbar): JSX.Element => (
    <div className='navbar__container'>
        <div className='navbar__list'>
            <div className='navbar__list--one'>All</div>
            {categories.map(({name, id}) => 
               <Fragment key={id}>
                    <Link to={name}><div className='navbar__list--two'key={id}>{name}</div></Link>
               </Fragment>
            )}
        </div>
    </div>
)

export default Navbar;