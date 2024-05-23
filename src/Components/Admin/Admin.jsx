import { NavLink } from "react-router-dom"


const Admin = (props) => {
    return (
        <main>
            <div>
                <h2>Users</h2>
                {
                    props.users.map((element, index) => (
                        <NavLink to={element.root} key={index}>{element.text}</NavLink>
                    ))
                }
            </div>
            <div>
                <h2>Courses</h2>
                {
                    props.courses.map((element, index) => (
                        <NavLink to={element.root} key={index}>{element.text}</NavLink>
                    ))
                }
            </div>
            <div>
                <h2>Classes</h2>
                {
                    props.classes.map((element, index) => (
                        <NavLink to={element.root} key={index}>{element.text}</NavLink>
                    ))
                }
            </div>
        </main>
    )
}

export { Admin }