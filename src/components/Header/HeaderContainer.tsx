import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuthorized} from "../../Redux/auth-reducer";
import {loginAPI} from "../../API/API";

interface forHeaderContainer {
    state:object,
    setUserAuthorized:any
}


class HeaderAPIContainer extends React.Component<forHeaderContainer>{
    componentDidMount() {
                loginAPI.getLogin().then(data => {
                if(data.resultCode === 0){
                    let {id,email,login} = data.data;
                    this.props.setUserAuthorized(id,email,login);
                }
            });
    }
    render(){
        return(<Header  {...this.props}/>);
    }
}

const mapStateToProps = (state:any) =>{
    return {
        state:state.AuthPage
    }
}

const HeaderContainer = connect(mapStateToProps, {setUserAuthorized})(HeaderAPIContainer);

export default HeaderContainer;