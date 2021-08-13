import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuthorized} from "../../Redux/auth-reducer";
import axios from "axios";

interface forHeaderContainer {
    state:object,
    setUserAuthorized:any
}


class HeaderAPIContainer extends React.Component<forHeaderContainer>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id,email,login} = response.data.data;
                    console.log(id);
                    this.props.setUserAuthorized(id,email,login);
                }
                // console.log(this.props.setUserAuthorized(1,'asd','asd'));
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