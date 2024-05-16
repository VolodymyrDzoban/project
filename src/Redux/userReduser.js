

const UPPDATA = 'UPPDATA'
const CHEKEDBUTTONPROFILE = 'CHEKEDBUTTONPROFILE'
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
    authorisation: true,
    checkValue: false,
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHEKEDBUTTONPROFILE:
            return {
                ...state,
                checkValue: action.data,
            }
        case UPPDATA:
            return {
                ...state,
                userInfo: { ...state.userInfo, ...action.data },
            }
        default:
            return state;
    }
}
const uppDataAC = (data) => ({
    type: CHEKEDBUTTONPROFILE,
    data: data,
})
const uppDataInfoAC = (data) => ({
    type: UPPDATA,
    data: data,
})
export { userReduser, uppDataAC, uppDataInfoAC };