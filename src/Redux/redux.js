import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { headerReduser } from "./headerReduser";
import { golovnaReduser } from "./golovnaReduser";
import { userReduser } from "./userReduser";
import { coursesReduser } from "./coursesReduser";
import { personReduser } from "./personReduser";
import { adminReduser } from "./adminReduser";


const rootReducer = combineReducers({
    header: headerReduser,
    golovna: golovnaReduser,
    user: userReduser,
    courses: coursesReduser,
    personData: personReduser,
    admin: adminReduser,
})

const store = createStore(rootReducer, composeWithDevTools())

export { store };