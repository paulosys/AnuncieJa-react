import React, { useState } from 'react';

const Login = () => {

    const [showForm, setShowForm] = useState(false);

    const showFormLogin = () => {
        setShowForm(showForm == false);
    }

    return (
        <div>
            <h1>Login</h1>
                <form>
                    <div>
                        <label>Nome:</label>
                        <input type="text" name="username" required />
                    </div>
                    
                    <div>
                        <label>Senha:</label>
                        <input type="text" name="password" defaultValue={123456} readOnly required/>
                    </div>
                    
                    <input type="submit" value="Entrar" onClick={showFormLogin}/>
                </form>
        </div>
    )
}

export default Login;