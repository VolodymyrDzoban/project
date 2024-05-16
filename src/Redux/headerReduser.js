

const initialState = {
    menu: [
        { title: 'Головна', root: '/' },
        { title: 'Курси', root: '/my-courses' },
        { title: 'Щоденник', root: '' },
        { title: 'Однокласники', root: '' },
    ]
}

const headerReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
            break
        default:
            return state;
    }
}

export { headerReduser };