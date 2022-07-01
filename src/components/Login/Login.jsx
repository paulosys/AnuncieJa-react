import React, { useState } from 'react';

import './Login.css';

const Login = () => {

    const [showForm, setShowForm] = useState(true);

    const showFormLogin = () => {
        setShowForm(showForm == false);
    }

    return (
        <div className='Container-login' style={{display: "none"}}>
            <div className='Content-login'>
                <h1>Login</h1>
                <form className='form-login'>
                    <div>
                        <label>Nome:</label>
                        <input type="text" name="username" required />
                    </div>
                    
                    <div>
                        <label>Senha:</label>
                        <input type="text" name="password" defaultValue={123456} readOnly required/>
                    </div>
                    
                    <div className='Container-button-login'>
                        <input type="submit" value="Entrar" onClick={showFormLogin}/>
                    </div>
                </form>
                </div>

        </div>
    )
}

export default Login;