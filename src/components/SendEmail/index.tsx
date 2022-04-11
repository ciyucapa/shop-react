import './index.css'
import Assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import ButtonField from '../atomos/ButtonField/Button';

const SendEmail = () => {
    return (
        <div className='sendEmail__container'>
            <div className='sendEmail__container--box'>
                <h3>Email has been sent!</h3>
                <p>Please check your inblox for instructions on how to reset the password</p>
                <div className='sendEmail__image--container'>
                    <img className='sendEmail__image' src={Assets.emailIcon} alt='email' />
                </div>
                <ButtonField text='Login' isIcon={false} />
                <p className='sendEmail__resend'>
                    <span>Didn´t receive the email? </span>
                    <Link to={"/recovery"}>Resend</Link>
                </p>
            </div>
        </div>
    );
};

export default SendEmail