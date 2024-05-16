

const Course = (props) => {
    return (
        <main>
            <section>
                <h2>{props.course.title}</h2>
                <div className="container">
                    <span>Відеоконференція</span>
                    <img src="#" alt="" />
                </div>
            </section>
            <aside></aside>
            <div></div>
        </main>
    );
}

export { Course };