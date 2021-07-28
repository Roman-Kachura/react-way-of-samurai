import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    ProfilePage: profileReducer
});


let store = createStore(reducers);

export default store;