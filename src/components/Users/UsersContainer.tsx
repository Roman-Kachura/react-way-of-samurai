import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setCurrentPage, setPreloader, setTotalUsersCount, setUsers, unfollow} from "../../Redux/users-reducer";
import axios from "axios";
import Preload from "../../common/Preload/Preload";

interface RecipeProps {
    state: {
        users: Array<object>,
        totalUsersCount: number,
        pageSize: number,
        currentPage: number,
        isPreloader:boolean
    },
    setUsers: any,
    follow: any,
    unfollow: any,
    setCurrentPage: any,
    setTotalUsersCount: any,
    setPreloader:any
}

class UsersAPIContainer extends React.Component <RecipeProps> {
    componentDidMount() {
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }


    clickBtn = (numPage: number) => {
        this.props.setCurrentPage(numPage);
        this.props.setPreloader(true);


        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return <>
            {this.props.state.isPreloader ? <Preload/> : null}
            <Users
                state={this.props.state}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                clickBtn={this.clickBtn}
            />
        </>
    }
}


const mapStateToProps = (state: any) => {
    return {
        state: state.UsersPage
    }
}


const UsersContainer = connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPreloader
})(UsersAPIContainer);

export default UsersContainer;