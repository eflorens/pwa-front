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

    const login = (email, password) => {
        AuthService.login(email, password).then(res => {
            console.log(res);

            const { userId, token } = res.data;
            localStorage.setItem("userId", userId)
            localStorage.setItem("token", token)

            setAuthState({
                userId: userId,
                token: token,
                isAuthenticated: true,
            })

            return res;
        })
    }

    const register = (username, email, password) => {
        AuthService.register(email, password).then(res => {
            console.log(res);
            return res;
        })
    }

    const logout = () => {
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
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;