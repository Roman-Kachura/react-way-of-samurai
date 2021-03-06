import {userAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PRELOADER = 'SET_PRELOADER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

export type UserStateType = {
    users: Array<object>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isPreloader: boolean,
    followingInProgress: Array<object>
}

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isPreloader: true,
    followingInProgress: []

}

const usersReducer = (state: UserStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (action.userId === u.id) {
                        u.followed = true;
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (action.userId === u.id) {
                        u.followed = false;
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_PRELOADER:
            return {
                ...state,
                isPreloader: action.isPreloader
            }

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => {
    return {type: FOLLOW, userId}
};
export const unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, userId}
};
export const setUsers = (users: Array<object>) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (numPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: numPage}
};
export const setTotalUsersCount = (count: number) => {
    return {type: SET_TOTAL_USERS_COUNT, count}
};
export const setPreloader = (isPreloader: boolean) => {
    return {type: SET_PRELOADER, isPreloader}
};
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching}
}
export const getUsers = (currentPage:number,pageSize:number) => {
    return (dispatch: any) => {
        dispatch(setPreloader(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setPreloader(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userId:number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
        })
        dispatch(toggleFollowingProgress(false, userId));
    }
}

export const unfollow = (userId:number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
        })
        dispatch(toggleFollowingProgress(false, userId));
    }
}

export default usersReducer;