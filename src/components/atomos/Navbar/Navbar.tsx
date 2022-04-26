import './navbar.css'
import {INavbar} from '../../../interfaces'
import { Link } from 'react-router-dom';

const Navbar = ({categories}: INavbar): JSX.Element => (
    <div className='navbar__container'>
        <div className='navbar__list'>
            <div className='navbar__list--one'>All</div>
            {categories.map(({name, id}) => 
                <Link to={name}><div className='navbar__list--two'key={id}>{name}</div></Link>
            )}
        </div>
    </div>
)

export default Navbar;