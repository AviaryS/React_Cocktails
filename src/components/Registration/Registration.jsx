import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Registration({setLogin, users, setUsers}) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(validateName(name));
    const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));
    const [id, setId] = useState(2);

    function validateName(name) {
        return name.length > 6;
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function handleSubmit(e) {
        e.preventDefault();
        nameIsValid ? setErrorName(false) : setErrorName(true);
        passwordIsValid ? setErrorPassword(false) : setErrorPassword(true);
        setId(id + 1);
        if (nameIsValid && passwordIsValid) {
            setUsers([...users, { id: id, name: name, password: password }]);
            setLogin(true);
            navigate('/');
        }
    }

    function onNameChange(e) {
        setName(e.target.value);
        setNameIsValid(validateName(name))
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
        setPasswordIsValid(validatePassword(password))
    }

    return (
        <div>
            <form action="">
                <div>
                    <label>имя:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={onNameChange}
                    />
                    {errorName && <p>Имя меньше 6 символов</p>}
                </div>
                <div>
                    <label>пароль:</label>
                    <br />
                    <input
                        type="text"
                        value={password}
                        onChange={onPasswordChange}
                    />
                    {errorPassword && <p>Пароль меньше 8 символов</p>}
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}

export default Registration;