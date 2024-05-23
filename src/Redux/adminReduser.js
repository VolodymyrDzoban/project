
const initialState = {
    admin: true,
    users: [
        { text: "Добавити користувачів", root: "/postOneUser" },
        { text: "Завантажити користувачів", root: "/postAllUsers" },
        { text: "Переглянути користувачів", root: "/getAllUsers" },
    ],
    courses: [
        { text: "Ствоирити курс", root: "/postOneCourses" },
        { text: "Переглянути курси", root: "/getAllCourses" },
        { text: "Редагувати курс", root: "/pullOneCourses" },
    ],
    journals: [
        { text: "", root: "" },
        { text: "", root: "" },
        { text: "", root: "" },
    ],
    classes: [
        { text: "Створити клас", root: "/postOneClass" },
        { text: "Переглянути класи", root: "/getAllClasses" },
        { text: "Редагувати клас", root: "/pullOneClass" },
    ]
}

const adminReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
            return state;
        default:
            return state;
    }
}

export { adminReduser }