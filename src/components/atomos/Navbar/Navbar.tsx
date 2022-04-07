import './navbar.css'

const Navbar = (): JSX.Element => (
    <div className='navbar__container'>
        <ul className='navbar__list'>
            <li className='navbar__list--one'>All</li>
            <li className='navbar__list--two'>Clothes</li>
            <li className='navbar__list--three'>Electronics</li>
            <li className='navbar__list--four'>Furniture</li>
            <li className='navbar__list--five'>Toys</li>
            <li className='navbar__list--six'>Others</li>
        </ul>
    </div>
)

export default Navbar;