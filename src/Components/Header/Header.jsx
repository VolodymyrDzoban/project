import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "./../../img/logo.png";
import userlogo from "./../../img/user.png"
import style from './Header.module.css';


const Header = () => {
    const user = useSelector(state => state.user.userInfo);
    const state = useSelector(state => state.header);
    const authorisation = useSelector(state => state.user.authorisation);
    return (
        <header>
            <img src={img} alt="" />
            {authorisation ?
                <>
                    <ul>
                        {state.menu.map(item =>
                            <li key={item.title}>
                                <NavLink to={item.root}>{item.title}</NavLink>
                            </li>
                        )}
                    </ul>
                    <div>
                        <span>{user.name} {user.surname}</span>
                        <img src="#" alt="" />
                    </div>

                </>
                :
                <div>
                    <button>Увійти</button>
                    <img src={userlogo} alt="" />
                </div>
            }
        </header>
    );
}

export { Header };