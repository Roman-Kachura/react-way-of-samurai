const SET_USER_AUTHORIZED = 'SET_USER_AUTHORIZED';

type stateType = {
    login:string,
    email:string,
    id:number
}

let initialState = {
    login:null,
    email:null,
    id:null,
    isAuth:false
}

const authReducer = (state:any = initialState,action:any) =>{
    debugger
    switch (action.type) {
        case SET_USER_AUTHORIZED:
            return{
                ...state,
                login:action.login,
                email:action.email,
                id:action.id,
                isAuth:true
            }

        default: return state;
    }
}

export const setUserAuthorized = (id:any,email:any,login:any)=>({type:SET_USER_AUTHORIZED, id,email,login});

export default authReducer;
