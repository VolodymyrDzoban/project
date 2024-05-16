import { useSelector } from "react-redux";
import { Course } from "./Course";
import { useParams } from "react-router-dom";


const CourseContainer = () => {
    const id = useParams().id;
    const course = useSelector(state => state.courses[0])
    return (
        <Course course={course} />
    );
}

export { CourseContainer };