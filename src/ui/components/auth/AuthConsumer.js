import React from "react";
import {AuthContext} from './AuthContext';

const AuthConsumerWrap = (Component) => {
  return (
    class AuthConsumer extends React.Component {
        render() {
            return(
                <AuthContext.Consumer>
                    {value => {
                        return <Component {...value} {...this.props} />
                    }}
                </AuthContext.Consumer>
            )
        }        
    }
  )
}


export default AuthConsumerWrap;