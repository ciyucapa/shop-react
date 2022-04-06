import '../../styles/login.css'

const NewPassword = () => {
    return (
        <div className='login__container'>
            <div className='login__container--box'>
                <h3>Create a new password</h3>
                <p>Enter a new password for your account</p>
                <form>
                    <label>Password
                        <input type="text" placeholder="email"/>
                    </label>
                    <label>Re-enter Password
                        <input type="text" placeholder="password"/>
                    </label>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default NewPassword