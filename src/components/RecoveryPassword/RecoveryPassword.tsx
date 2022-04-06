import '../../styles/recoveryPassword.css'
import Assets from '../../assets/assets';

const RecoveryPassword = () => {
    return (
        <div className='recovery__container'>
            <div className='recovery__container--box'>
                <h3>Email has been sent</h3>
                <p>Please check your inbox for instructions on how toreset the password</p>
                <div className='recovery__image--container'>
                    <img className='recovery__image' src={Assets.emailIcon} alt='email' />
                </div>
                <button className="recovery__button" >Login</button>
                <p className='recovery__resend'>
                    <span>Didn´t receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword