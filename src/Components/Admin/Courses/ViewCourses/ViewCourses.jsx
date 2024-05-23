

const ViewCourses = (props) => {
    return (
        <main>
            {
                props.courses.map((element) => (
                    <div>
                        <p>{element.id}</p>
                        <p>{element.title}</p>
                        <p>{element.description}</p>
                    </div>
                ))
            }
        </main>
    )
}

export { ViewCourses }