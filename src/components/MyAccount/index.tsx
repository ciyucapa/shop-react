import './myaccount.css';
import useForm from '../../hooks/useForm';

const MyAccount = () => {
    const {onSubmit, changeFormValues, valuesForm} = useForm()

    return (
        <div className='myaccount__container'>
            <div className='myaccount__container--box'>
                <p className='myaccount__title'>My Account</p>
                <form onSubmit={onSubmit} >
                    <label>Name
                        <input 
                            type="text" 
                            placeholder="name"  
                            name="name" 
                            value={valuesForm.name} 
                            onChange={changeFormValues}
                        />
                    </label>
                    <label>Email Address
                        <input 
                            type="text" 
                            placeholder="email" 
                            name="email"
                            onChange={changeFormValues}
                            value={valuesForm.email} 
                        />
                    </label>
                    <label>Password
                        <input 
                            type="text" 
                            placeholder="password" 
                            name="password" 
                            onChange={changeFormValues} 
                            value={valuesForm.password}
                        />
                    </label>
                    <label>Role
                        <input 
                            type="text" 
                            placeholder="role" 
                            name="role"
                            onChange={changeFormValues}
                            value={valuesForm.role} 
                        />
                    </label>
                    <label>Avatar
                        <input 
                            type="text" 
                            placeholder="avatar" 
                            name="avatar"
                            onChange={changeFormValues}
                            value={valuesForm.avatar}
                        />
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default MyAccount