import { NavLink } from "react-router-dom";
import { autoAC } from "../../Redux/userReduser";
import { useState } from "react";


const Authorization = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    function testAuto() {
        if (login && password) {
            props.dispatch(autoAC(true))
        }
    }
    return (
        <main>
            <img src="#" alt="" />
            <section>
                <div className="container">
                    <input type="password" placeholder="Введіть пароль"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder="Введіть логін"
                        value={login} onChange={(e) => setLogin(e.target.value)} />
                    <div className="flex">
                        <button>Підтримка</button>
                        <NavLink to='/'
                            onClick={() => testAuto()}
                        >Увійти</NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}

export { Authorization };