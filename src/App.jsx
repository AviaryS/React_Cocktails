import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Cocktails from "./components/Cocktails/Cocktails";
import Order from "./components/Order/Order";

function App() {
  const [login, setLogin] = useState(false);

  const [users, setUsers] = useState([
    { id: 0, name: 'admin', password: 'admin' },
    { id: 1, name: 'admin2', password: 'admin2' },
    { id: 2, name: 'admin3', password: 'admin3' },
  ]);

  const [order, setOrder] = useState([]);

  return (
    <div className="App">
        <p>CSS'а не будет, верстальщик ушел в запой и готовиться к лабе</p>
      <Router>
        <Header login={login} setLogin={setLogin}/>
        <Routes>
           <Route
            path='/'
            element={
               <Cocktails
                   login={login}
                   order={order}
                   setOrder={setOrder}
               />
            }
           />
           <Route
                path='/order'
                element={
                   <Order
                       order={order}
                       setOrder={setOrder}
                   />
                }
           />
          <Route
            path='/registration'
            element={
              <Registration
                  setLogin={setLogin}
                  users={users}
                  setUsers={setUsers}
              />
            }
          />
          <Route
            path='/login'
            element={
              <Login
                setLogin={setLogin}
                users={users}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
