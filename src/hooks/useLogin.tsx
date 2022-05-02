import { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { getLogin } from "../services";
import { ILoginUsers } from '../interfaces';
import { useNavigate } from "react-router-dom";


const useLogin = () => {
    const [loginUser, setLoginUser] = useState<ILoginUsers>({
        email: '',
        password: ''
    })
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggueadUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])

    const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const users = await getLogin(loginUser)
        
            window.localStorage.setItem(
                "loggueadUser", JSON.stringify(users)
            )

            setLoginUser({
                email: '',
                password: ''
            })

            setUser(users);
            navigate('/')
            
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogout = () => {
        setUser(null)
        navigate('/login')
        window.localStorage.removeItem('loggueadUser')
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