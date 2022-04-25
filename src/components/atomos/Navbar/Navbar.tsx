import './navbar.css'
import {INavbar} from '../../../interfaces'
import { Link } from 'react-router-dom';

const Navbar = ({categories}: INavbar): JSX.Element => (
    <div className='navbar__container'>
        <ul className='navbar__list'>
            <li className='navbar__list--one'>All</li>
            {categories.map(({name, id}) => 
                <Link to={name}><li className='navbar__list--two'key={id}>{name}</li></Link>
            )}
        </ul>
    </div>
)

export default Navbar;