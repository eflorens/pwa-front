import React, {useContext} from 'react';
import AuthService from "../services/AuthService";

const AuthContext = React.createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = React.useState({
        userId: null,
        token: null,
        isAuthenticated: false,
    });

    const authLogin = (email, password) => {
        return AuthService.login(email, password).then(res => {
            const { userId, token } = res.data;
            localStorage.setItem("userId", userId)
            localStorage.setItem("token", token)

            setAuthState({
                userId: userId,
                token: token,
                isAuthenticated: true,
            })

            return res;
        }).catch(err => {
            console.log(err)
        });
    }

    const authRegister = (username, email, password) => {
        AuthService.register(email, password).then(res => {
            console.log(res);
            return res;
        })
    }

    const authLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');

        setAuthState({
            userId: null,
            token: null,
            isAuthenticated: false,
        });

    }
    return (
        <AuthContext.Provider value={{
            ...authState,
            authLogin
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;