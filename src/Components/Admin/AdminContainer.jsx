import { useSelector } from "react-redux";
import { Admin } from "./Admin";


const AdminContainer = () => {
    const users = useSelector(state => state.admin.users);
    const courses = useSelector(state => state.admin.courses);
    const classes = useSelector(state => state.admin.classes);
    return (
        <Admin
            users={users}
            courses={courses}
            classes={classes}
        />
    )
}

export { AdminContainer }