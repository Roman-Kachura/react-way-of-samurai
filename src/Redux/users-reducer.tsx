const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PRELOADER = 'SET_PRELOADER';

type stateType = {
    users:Array<object>,
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    isPreloader:boolean
}

let initialState = {
    users:[],
    totalUsersCount:0,
    pageSize:10,
    currentPage:2,
    isPreloader:true
}

const usersReducer = (state:stateType = initialState, action:any)=>{
    switch (action.type){
        case FOLLOW :
            return {
                ...state,
                users:state.users.map((u: any) => {
                    if (action.userId === u.id) {
                        u.followed = true;
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map((u: any) => {
                    if (action.userId === u.id) {
                        u.followed = false;
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users:action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount:action.count
            }
        case SET_PRELOADER:
            return {
                ...state,
                isPreloader:action.isPreloader
            }
        default: return state;
    }
}

export const follow = (userId:number)=>{return {type:FOLLOW, userId}};
export const unfollow = (userId:number)=> {return {type:UNFOLLOW, userId}};
export const setUsers= (users:Array<object>)=>{return{type:SET_USERS, users}};
export const setCurrentPage = (numPage:number)=>{return {type:SET_CURRENT_PAGE, currentPage: numPage}};
export const setTotalUsersCount = (count:number)=>{return{type:SET_TOTAL_USERS_COUNT, count}};
export const setPreloader = (isPreloader:boolean)=>{return{type:SET_PRELOADER, isPreloader}};

export default usersReducer;