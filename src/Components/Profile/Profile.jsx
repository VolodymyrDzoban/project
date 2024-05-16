import { useDispatch, useSelector } from "react-redux";
import personlogo from './../../img/person-logo.png';
import styles from './Profile.module.css';
import { useState } from "react";
import { uppDataAC, uppDataInfoAC } from "../../Redux/userReduser";


const Profile = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userInfo);
    const [info, setInfo] = useState({
        email: user.email,
        age: user.age,
        tel: user.tel,
        parents_tel: user.parents_tel,
        birth: user.birth
    });
    const infoName = [
        'Клас:',
        'Поштова скринька:',
        'Вік:',
        'Номер телефону:',
        'Номер телефону батьків:',
        'Дата народження:'
    ];
    const change = (e) => {
        const { name, value } = e.target;
        setInfo(state => ({
            ...state,
            [name]: value
        }));
    };
    return (
        <main className={styles.main}>
            <img src={user.logo ? user.logo : personlogo} alt="" />
            <h2 className={styles.h2}>{user.name} {user.surname}</h2>
            <div className={styles.info_headline}>Інформація про користувача</div>
            <section>
                <div className={styles.info}>
                    <div>
                        {
                            Object.values(infoName).map((value, index) => (
                                <span key={index}>{value}</span>
                            ))
                        }
                    </div>
                    <div>
                        <p>{user.clas}</p>
                        {props.checkValue ?
                            Object.entries(info).map(([name, value]) => (
                                <input
                                    key={name}
                                    type="text"
                                    name={name}
                                    value={value}
                                    onChange={change}
                                />
                            )) :
                            Object.values(info).map((value, index) => (
                                <p key={index}>{value}</p>
                            ))
                        }
                    </div>
                </div>
                <button onClick={() => {
                    dispatch(uppDataAC(!props.checkValue))
                    dispatch(uppDataInfoAC(info))
                }}>
                    {props.checkValue ? 'Зберегти зміни' : 'Редагувати дані'}
                </button>
            </section>
            <section>

            </section>
        </main>
    )
}

export { Profile }