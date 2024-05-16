import { connect, useDispatch, useSelector } from "react-redux"
import { Profile } from "./Profile"


const mapStateToProps = (state) => {
    return {
        checkValue: state.user.checkValue,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile)
// const ProfileContainer = (props) => {
//     const dispatch = useDispatch();
//     const user = useSelector(state => state.user.userInfo);
//     return (
//         <Profile />
//     )
// }
export { ProfileContainer }