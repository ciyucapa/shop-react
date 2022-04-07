import Market from "../../../assets/componentIcons/Market";
import './logo.css'

const Logo = () : JSX.Element => (
    <div className='logo__container'>
        <Market/>
        <p className="logo__title--one">REACT</p>
        <p className="logo__title--two">Shop</p>
    </div>
);

export default Logo;