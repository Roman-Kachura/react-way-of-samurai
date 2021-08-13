import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
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