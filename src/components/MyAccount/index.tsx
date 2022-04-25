import './myaccount.css';

const MyAccount = () => {
    return (
        <div className='myaccount__container'>
            <div className='myaccount__container--box'>
                <p className='myaccount__title'>My Account</p>
                <form>
                    <label>Name
                        <input type="text" placeholder="name"/>
                    </label>
                    <label>Email Address
                        <input type="text" placeholder="email"/>
                    </label>
                    <label>Password
                        <input type="text" placeholder="password"/>
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default MyAccount