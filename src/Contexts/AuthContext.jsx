import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("");
    const navigate = useNavigate();

    const login = (token) => {
        setIsAuth(true);
        setToken(token);
        console.log(token)
        navigate('/loginstatus')
    }
    
    const logout = () => {
        setIsAuth(false);
        navigate('/')
    }

    return <AuthContext.Provider value={{isAuth, token, login, logout}}>{children}</AuthContext.Provider>
}