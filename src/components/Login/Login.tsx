import './login.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { FormEvent, useState } from 'react';
//import useUser from '../../hooks/useUser';
//import {IDataUsers} from '../../interfaces';
import { useNavigate } from "react-router-dom";
import {getLogin} from "../../services"

const Login = () => {
    const {valuesForm, changeFormValues} = useForm();
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const users = await getLogin(valuesForm)
            //navigate('/')
            console.log("user", user)
            setUser(users)
        } catch(e) {
            console.log(e)
        }
    }

    console.log("user", user)

    return (
        <div className='login__container'>
            <div className='login__container--box'>
                <form onSubmit={handleLogin}>
                    <label className='login__label'>Email address
                        <input type="text" placeholder="email" name="email" onChange={changeFormValues} value={valuesForm.email} />
                    </label>
                    <label  className='login__label'>Password
                        <input type="password" placeholder="password" name="password" onChange={changeFormValues} value={valuesForm.password} />
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