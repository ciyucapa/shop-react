import { FormEvent, useState, ChangeEvent } from 'react';

import { ILoginUsers } from '../interfaces';
import {AuthContext} from '../context/authContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [loginUser, setLoginUser] = useState<ILoginUsers>({
        email: '',
        password: ''
    })
    const [user, setUser] = useState(null);
    const {login, setUserLogin} = useContext(AuthContext);
    const navigate = useNavigate()
   

   /*useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggueadUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])*/

    const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const users = await login(loginUser)
            window.localStorage.setItem(
                "loggueadUser", JSON.stringify(users)
            )
            navigate('/')
            setUser(users)
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggueadUser')
        setUser(null)
        navigate('/login');
        setUserLogin({
            email: '',
            password: ''
        })

    }

    return {
        loginUser,
        user,
        changeLogin,
        handleLogin,
        handleLogout
    };
};

export default useLogin;