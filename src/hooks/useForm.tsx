import { useState, useMemo, ChangeEvent, FormEvent} from "react";
//import {fetchDataUsers} from '../services';
import {IDataUsers} from '../interfaces';
import {AuthContext} from '../context/authContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const useForm = () => {
    const [valuesForm, setValuesForm] = useState<IDataUsers>({
        email: '',
        password: '',
        name: '',
        role: '',
        avatar: ''
    })

    const navigate = useNavigate()
    const {signup} = useContext(AuthContext);


    const changeFormValues = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesForm({ ...valuesForm, [event.target.name]: event.target.value });
    };

    const isValidFormMyAcoount = useMemo(() => {
        return valuesForm;
    }, [valuesForm]);

    const resetForm = () => {
        setValuesForm({
            email: '',
            password: '',
            name: '',
            role: '',
            avatar: ''
        });
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetForm();
        try {
            await signup(valuesForm)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        valuesForm,
        isValidFormMyAcoount,
        changeFormValues,
        onSubmit
    };
};

export default useForm;