import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {StateType} from "../../Redux/redux-store";
import {compose} from "redux";


interface RecipeProps {
    state: {
        profile: any
    },

    getUserProfile: any
    history: any
    location: any
    match: any
    staticContext: any
}

class ProfileAPIContainer extends React.Component <RecipeProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    linkUrl = (url: string) => {
        if (url.substr(0, 8) !== 'https://') {
            {
                window.location.href = 'https://' + url
            }
        }
    }

    render() {
        return <>
            <Profile {...this.props} linkUrl={this.linkUrl}/>
        </>
    }
}

const mapStateToPropsAuthRedirect = (state: StateType) => {
    return {isAuth: state.AuthPage.isAuth}
}

const mapStateToProps = (state: StateType) => {
    return {state: state.ProfilePage}
}

const ProfileContainer: any = compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    connect(mapStateToPropsAuthRedirect),
    withAuthRedirect
)(ProfileAPIContainer)

export default ProfileContainer;