import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../API/API";

interface RecipeProps {
    state: {
        profile: any
    },

    setUserProfile: any,
    history: any,
    location: any,
    match: any,
    staticContext: any
}

class ProfileAPIContainer extends React.Component <RecipeProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    linkUrl = (url:string) =>{
        if(url.substr(0,8) !== 'https://'){
            {window.location.href = 'https://' + url}
        }
    }

    render() {
        return <>
            <Profile {...this.props} linkUrl={this.linkUrl}/>
        </>
    }
}

let withRouterUserContainer = withRouter(ProfileAPIContainer);

const mapStateToProps = (state: any) => {
    return {state: state.ProfilePage}
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouterUserContainer);
export default ProfileContainer;