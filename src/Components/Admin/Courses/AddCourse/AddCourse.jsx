import { useState } from "react"
import { useDispatch } from "react-redux";
import { addCourseAC } from "../../../../Redux/coursesReduser";


const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()
    const addCourse = () => {
        dispatch(addCourseAC({
            title: title,
            description: description,
        }))
    }
    return (
        <main>
            <p>title</p>
            <input
                value={title} onChange={(e) => setTitle(e.target.value)}
            />
            <p>description</p>
            <input
                value={description} onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addCourse}>Add</button>
        </main>
    )
}

export { AddCourse }