import React, { useState } from "react";
import {AuthContext} from './AuthContext';
 
 
const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (email, password) => {
        if (email !== "test@test.com" || password !== "123") {
            return;
        }
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return(        
        <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )   
};
 
export default AuthProvider;