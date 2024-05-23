
const initialState = {
    infoName: [
        'Клас:',
        'Поштова скринька:',
        'Вік:',
        'Номер телефону:',
        'Номер телефону батьків:',
        'Дата народження:'
    ]
}

const personReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
            return state;
        default:
            return state;
    }
}

export { personReduser }