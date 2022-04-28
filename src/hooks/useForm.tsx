import { useState, useMemo, ChangeEvent, FormEvent} from "react";
import {fetchDataUsers} from '../services';
import {IDataUsers} from '../interfaces'

const useForm = () => {
    const [valuesForm, setValuesForm] = useState<IDataUsers>({
        email: '',
        password: '',
        name: '',
        role: '',
        avatar: ''
    })

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
        fetchDataUsers(valuesForm);
    }

    return {
        valuesForm,
        isValidFormMyAcoount,
        changeFormValues,
        onSubmit
    };
};

export default useForm;