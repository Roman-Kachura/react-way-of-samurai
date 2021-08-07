import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import axios from "axios";

interface RecipeProps {
    state:{
        users:Array<object>,
        totalUsersCount:number,
        pageSize:number,
        currentPage:number
    },
    setUsers:any,
    follow:any,
    unfollow:any,
    setCurrentPage:any,
    setTotalUsersCount:any
}

class UsersAPIContainer extends React.Component <RecipeProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }


    clickBtn = (numPage: number) => {
        this.props.setCurrentPage(numPage);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render(){
        return <Users
            state={this.props.state}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            clickBtn={this.clickBtn}/>
    }
}


const mapStateToProps = (state: any) => {
    return {
        state: state.UsersPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },

        follow: (userId: number) => {
            dispatch(followAC(userId));
        },

        setUsers: (users: Array<object>) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (numPage: number) => {

            dispatch(setCurrentPageAC(numPage))
        },

        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;