import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

type actionType = {
    type:string,
    text:string
}


let store = {
    _state:{
        ProfilePage:{
            posts: [
                { id: 1, text: "post 1", likesCount: 1 },
                { id: 2, text: "post 2", likesCount: 2 },
                { id: 3, text: "post 3", likesCount: 3 },
                { id: 4, text: "post 4", likesCount: 4 },
            ],

            updateNewPostText:''
        },

        DialogsPage:{
            messages: [
                { id: 1, message: "hey 1" },
                { id: 2, message: "hey 2" },
                { id: 3, message: "hey 3" },
                { id: 4, message: "hey 4" },
                { id: 5, message: "hey 5" },
                { id: 6, message: "hey 6" },
            ],

            dialogs: [
                { id: 1, name: "Sveta" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Dima" },
                { id: 4, name: "Vitalya" },
                { id: 5, name: "Roma" },
                { id: 6, name: "Kolya" },
            ],

            updateNewMessageText:''
        }

    },

    getState(){
        return this._state
    },

    _callsubscriber:(state:object)=>{
        alert('State changed');
    },


    subscribe(observer: any){
        this._callsubscriber = observer;
    },

    dispatch(action:actionType){
        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage = dialogReducer(this._state.DialogsPage,action);
        this._callsubscriber(this._state);
    }
}

export default store;