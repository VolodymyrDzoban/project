import { useDispatch } from "react-redux";
import { Authorization } from "./Authorization";


const AuthorizationContainer = () => {
    const dispatch = useDispatch();
    return (
        <Authorization dispatch={dispatch} />
    )
}

export { AuthorizationContainer };