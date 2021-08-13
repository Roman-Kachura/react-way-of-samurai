import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    ProfilePage: profileReducer,
    UsersPage:usersReducer,
    AuthPage:authReducer
});


let store = createStore(reducers);

export default store;