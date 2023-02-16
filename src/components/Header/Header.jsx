import React from 'react';
import {Link} from "react-router-dom";

function Header({login, setLogin}) {
    return (
        <div>
            {login ?
                <>
                    <Link to="/order"> Заказы</Link>
                    <Link to="/"> На главную</Link>
                    <button onClick={() => setLogin(false)}>Выйти</button>
                </>
            :
                <>
                    <Link to="/"> На главную</Link>
                    <Link to="/registration">Регистрация</Link>
                    <Link to="/login">Логин</Link>
                </>
            }
        </div>
    );
}

export default Header;