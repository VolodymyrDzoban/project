import { useState } from "react"


const AddUser = () => {
    const [info, setInfo] = useState({
        name: '',
        surname: '',
        third_name: '',
        email: '',
        password: '',
        birth: '',
        clas: '',
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInfo(state => ({
            ...state,
            [name]: value
        }));
    };
    return (
        <main>
            {
                Object.entries(info).map(([name, value]) => (
                    <>
                        <p>{name}:</p>
                        <input
                            key={name}
                            name={name}
                            value={value}
                            onChange={change}
                        />
                    </>
                ))
            }
            <button>Add</button>
        </main>
    )
}

export { AddUser }