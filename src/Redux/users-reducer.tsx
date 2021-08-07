const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const setUsers = 'SETUSERS';
const setCurrentPage = 'SET_CURRENT_PAGE';
const setTotalUsersCount = 'SET_TOTAL_USERS_COUNT';

type stateType = {
    users:Array<object>,
    totalUsersCount:number,
    pageSize:number,
    currentPage:number
}

let initialState = {
    users:[],
    totalUsersCount:0,
    pageSize:10,
    currentPage:2
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
        case setUsers:
            return {
                ...state,
                users:action.users
            };

        case setCurrentPage:
            return {
                ...state,
                currentPage:action.currentPage
            }

        case setTotalUsersCount:
            return {
                ...state,
                totalUsersCount:action.count
            }
        default: return state;
    }
}

export const followAC = (userId:number)=>{return {type:FOLLOW, userId}};
export const unfollowAC = (userId:number)=> {return {type:UNFOLLOW, userId}};
export const setUsersAC= (users:Array<object>)=>{return{type:setUsers, users}};
export const setCurrentPageAC = (numPage:number)=>{return {type:setCurrentPage, currentPage: numPage}};
export const setTotalUsersCountAC = (count:number)=>{return{type:setTotalUsersCount, count}}

export default usersReducer;