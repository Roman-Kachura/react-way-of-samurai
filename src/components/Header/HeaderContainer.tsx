import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserAuthorized} from "../../Redux/auth-reducer";
import {loginAPI} from "../../API/API";

interface forHeaderContainer {
    state: object,
    getUserAuthorized: any
}


class HeaderAPIContainer extends React.Component<forHeaderContainer> {
    componentDidMount() {
        this.props.getUserAuthorized();
    }

    render() {
        return (<Header  {...this.props}/>);
    }
}

const mapStateToProps = (state: any) => {
    return {
        state: state.AuthPage
    }
}

const HeaderContainer = connect(mapStateToProps, {getUserAuthorized})(HeaderAPIContainer);

export default HeaderContainer;