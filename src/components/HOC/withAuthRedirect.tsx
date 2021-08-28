import React from "react";
import {Redirect} from "react-router-dom";
type withAuthRedirectPropsType = {
    isAuth:boolean
}

export const withAuthRedirect = (Component:any)=>{
    class RedirectComponent extends React.Component<any>{
        render(){
            debugger;
            if(!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }

    return RedirectComponent;
}