import './login.css';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const {changeLogin, loginUser, handleLogin} = useLogin();
    return (
        <div className='login__container'>
            <div className='login__container--box'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label className='login__label'>Email address
                        <input type="text" placeholder="email" name="email" onChange={changeLogin} value={loginUser.email} />
                    </label>
                    <label  className='login__label'>Password
                        <input type="password" placeholder="password" name="password" onChange={changeLogin} value={loginUser.password} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <Link to={"/recovery"}>Forgot my password</Link>
                <Link to={"/my-account"}><button type="submit" >Sign up</button></Link>
            </div>
        </div>
    );
};

export default Login