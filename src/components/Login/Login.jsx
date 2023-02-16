import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login({setLogin, users}) {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }
    function onNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        users.map((user) => {
            if (name === user.name && password === user.password) {
                setLogin(true);
                navigate('/')
            }
        });
    }

    return (
        <div>
            <form action="">
                <div>
                    <label>имя:</label>
                    <br />
                    <input type="text"
                           value={name}
                           onChange={onNameChange}
                    />
                </div>
               <div>
                   <label>пароль:</label>
                   <br />
                   <input type="text"
                          value={password}
                          onChange={onPasswordChange}
                   />
               </div>
                <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                >
                    войти
                </button>
            </form>
        </div>
    );
}

export default Login;