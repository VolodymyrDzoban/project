import { useSelector } from "react-redux"
import { ViewCourses } from "./ViewCourses"


const ViewCoursesContainer = () => {
    const courses = useSelector(state => state.courses);
    return (
        <ViewCourses
            courses={courses}
        />
    )
}

export { ViewCoursesContainer }