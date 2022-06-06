import { createContext, useState } from "react";
import {fetchDataUsers, getLogin} from '../services';
import {IDataUsers, ILoginUsers, AuthProps} from '../interfaces';
import useUser from '../hooks/useUser';

export const AuthContext = createContext<AuthProps>({});

export const AuthProvider = ({ children }: any) => {
    const {users} = useUser();
    const [userRegister, setUserRegister] = useState<IDataUsers>({
        email: '',
        password: '',
        name: '',
        role: '',
        avatar: ''
    })

    const [userLogin, setUserLogin] = useState<ILoginUsers>({
        email: '',
        password: ''
    })

    const signup = (valuesForm1: IDataUsers) => {
        fetchDataUsers(valuesForm1);
        setUserRegister(valuesForm1);
    }

    const login = (valuesForm1: ILoginUsers) => {
        getLogin(valuesForm1)

        users.filter((user: IDataUsers) => {
            if(user.email === valuesForm1.email) {
                return setUserLogin(valuesForm1)
            }
            return {}
        })
    }

    return <AuthContext.Provider value={{ signup, userRegister, login, userLogin, setUserLogin }}>{children}</AuthContext.Provider>
}
