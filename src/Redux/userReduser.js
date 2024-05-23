

const AUTO = 'AUTO'
const UPPDATA = 'UPPDATA'
const CHECKEDBUTTONPROFILE = 'CHECKEDBUTTONPROFILE'
const initialState = {
    userInfo: {
        name: "ゔおろぢみる",
        surname: "ぢょばん",
        third_name: "",
        email: "ab@g",
        password: "",
        logo: "",
        birth: "28.07.2008",
        tel: "+380_________",
        parents_tel: "+380_________",
        clas: "10-Б",
        age: "15"
    },
    authorization: false,
    checkValue: false,
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHECKEDBUTTONPROFILE:
            return {
                ...state,
                checkValue: action.data,
            }
        case UPPDATA:
            return {
                ...state,
                userInfo: { ...state.userInfo, ...action.data },
            }
        case AUTO:
            return {
                ...state,
                authorization: action.data,
            }
        default:
            return state;
    }
}
const checkedButtonProfileAC = (data) => ({
    type: CHECKEDBUTTONPROFILE,
    data: data,
})
const uppDataInfoAC = (data) => ({
    type: UPPDATA,
    data: data,
})
const autoAC = (data) => ({
    type: AUTO,
    data: data,
})

export {
    userReduser,
    checkedButtonProfileAC, uppDataInfoAC, autoAC
};