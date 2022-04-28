import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login__container'>
            <div className='login__container--box'>
                <form>
                    <label className='login__label'>Email address
                        <input type="text" placeholder="email" />
                    </label>
                    <label  className='login__label'>Password
                        <input type="text" placeholder="password"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <Link to={"/recovery"}>Forgot my password</Link>
                <Link to={"/my-account"}><button>Sign up</button></Link>
            </div>
        </div>
    );
};

export default Login