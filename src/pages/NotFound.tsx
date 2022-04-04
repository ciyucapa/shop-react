import Assets from '../assets/assets';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className='notfound__container'>
            <div className='notfound__container--box'>
                <h1>404</h1>
                <div className='notfound__gift--container'>
                    <img className='notfound__gift' src={Assets.gift404} alt='404' />
                </div>
                <p>Look like you´re lost</p>
                <Link  to={"/"}>
                    <div className="notfound__button">Go to Home?</div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound