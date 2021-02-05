import React from "react";
import {Route, Redirect} from "react-router-dom";


export const ProtectedRoute = ({component: Component, ...reset}) => {
    return(
        <div>
            <Route {...reset} render = {(props) => {
                return localStorage.token ? <Component {...props}/> : 
                <Redirect to={{
                    pathname: props.location.state === undefined ? "/" : props.location.state.from.pathname,
                    state: {
                        from: props.location
                    }
                }} />
            }}/>
        </div>
    );
}