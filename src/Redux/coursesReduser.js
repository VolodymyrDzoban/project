

const initialState = [
    {
        id: 0, title: "Інформатика", description: "Крутяк Н. О.",
        section: [
            { id: 1, name: "Section 1", }
        ]
    },
    {
        id: 1, title: "Інформатика", description: "Крутяк Н. О.",
        section: [
            { id: 1, name: "Section 1", }
        ]
    },
    {
        id: 2, title: "Інформатика", description: "Крутяк Н. О.",
        section: [
            { id: 1, name: "Section 1", }
        ]
    },
    {
        id: 3, title: "Інформатика", description: "Крутяк Н. О.",
        section: [
            { id: 1, name: "Section 1", }
        ]
    },
    {
        id: 4, title: "Інформатика", description: "Крутяк Н. О.",
        section: [
            { id: 1, name: "Section 1", }
        ]
    },
]

const coursesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
            break;
        default:
            return state;
    }
}

export { coursesReduser };