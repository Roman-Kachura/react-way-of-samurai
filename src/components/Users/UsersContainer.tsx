import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../Redux/users-reducer";
import Preload from "../../common/Preload/Preload";
import {userAPI} from "../../API/API";
import {StateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

interface RecipeProps {
    state: {
        users: Array<object>,
        totalUsersCount: number,
        pageSize: number,
        currentPage: number,
        isPreloader:boolean,
        followingInProgress:Array<object>
    },
    setUsers: any,
    follow: any,
    unfollow: any,
    setCurrentPage: any,
    setTotalUsersCount: any,
    setPreloader:any,
    toggleFollowingProgress: any
    getUsers:any
}

class UsersAPIContainer extends React.Component <RecipeProps> {
    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize);
    }


    clickBtn = (numPage: number) => {
        this.props.setCurrentPage(numPage);
        this.props.setPreloader(true);


        userAPI.getUsers(numPage, this.props.state.pageSize)
            .then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    buttonsShow = ()=>{
        let n = this.props.state.currentPage;
        const numbersPages = Math.ceil(this.props.state.totalUsersCount /this.props.state.pageSize);
        let buttons = [];
        if(n < 6){
            for(let i = 1; i <= 11; i++){
                buttons.push(i);
            }
        } else if(n >=6 && n < numbersPages){
            for(let i = n - 5; i < n + 6; i++){
                buttons.push(i);
            }
        }else if(n < (numbersPages) && n > (numbersPages - 11)){
            for(let i = numbersPages - 11; i < numbersPages; i++){
                buttons.push(i);
            }
        }

        return buttons;
    }

    render() {
        return <>
            {this.props.state.isPreloader ? <Preload/> : null}
            <Users
                state={this.props.state}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                clickBtn={this.clickBtn}
                buttonsShow={this.buttonsShow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}


const mapStateToProps = (state: StateType) => {
    return {
        state: state.UsersPage
    }
}

const mapStateToPropsAuthRedirect = (state: StateType) => {
    return {isAuth:state.AuthPage.isAuth}
}

const UsersContainer:any = compose(
    connect(mapStateToProps, {unfollow, follow, setUsers, setCurrentPage, setTotalUsersCount, setPreloader, toggleFollowingProgress, getUsers}),
    connect(mapStateToPropsAuthRedirect),
    withAuthRedirect
)(UsersAPIContainer)

export default UsersContainer;