import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "./../../img/logo.png";
import userlogo from "./../../img/user.png"
import style from './Header.module.css';


const Header = () => {
    const user = useSelector(state => state.user.userInfo);
    const state = useSelector(state => state.header);
    const authorization = useSelector(state => state.user.authorization);
    return (
        <header>
            <img src={img} alt="" />
            {authorization ?
                <>
                    <ul>
                        {state.menu.map(item =>
                            <li key={item.title}>
                                <NavLink to={item.root}>{item.title}</NavLink>
                            </li>
                        )}
                    </ul>
                    <div>
                        <NavLink to='/my'>{user.name} {user.surname}</NavLink>
                        <img src="#" alt="" />
                    </div>

                </>
                :
                <div>
                    <NavLink to='/authorization'>Увійти</NavLink>
                    <img src={userlogo} alt="" />
                </div>
            }
        </header>
    );
}

export { Header };