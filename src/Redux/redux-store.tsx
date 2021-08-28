import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer, {DialogsStateType} from "./dialogs-reducer";
import profileReducer, {ProfileStateType} from "./profile-reducer";
import usersReducer, {UserStateType} from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export type StateType = {
    DialogsPage:DialogsStateType
    ProfilePage: ProfileStateType
    UsersPage:UserStateType
    AuthPage:any
}

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    ProfilePage: profileReducer,
    UsersPage:usersReducer,
    AuthPage:authReducer
});


let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;