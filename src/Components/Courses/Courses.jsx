import { NavLink } from "react-router-dom";
import style from './Courses.module.css';


const Courses = (props) => {
    return (
        <main>
            <h2>Welcome👋</h2>
            <hr />
            <section>
                {props.courses.map((item, index) =>
                    <NavLink key={index} to={`/cours/${item.id}`}>
                        <img src="#" alt="" />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </NavLink>
                )}
            </section>
        </main>
    );
}

export { Courses };