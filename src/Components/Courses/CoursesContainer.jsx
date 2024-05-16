import { useSelector } from "react-redux";
import { Courses } from "./Courses";


const CoursesContainer = () => {
    const courses = useSelector(state => state.courses)
    return (
        <Courses courses={courses} />
    );
}

export { CoursesContainer };