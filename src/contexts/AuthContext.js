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

    const authLogin = async (email, password) => {
        return await AuthService.login(email, password).then(res => {
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
            return err;
        });
    }

    const authRegister = async (username, email, password) => {
        return await AuthService.register(username, email, password).then(res => {
            return res;
        }).catch(err => {
            return err;
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
            authLogin,
            authRegister
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;