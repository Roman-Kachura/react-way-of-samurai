import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    ProfilePage: profileReducer,
    UsersPage:usersReducer
});


let store = createStore(reducers);

export default store;