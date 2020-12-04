import axios from "axios";

const API_URL = "https://pwa-back.herokuapp.com";

/**
 * @param username
 * @param email
 * @param password
 */
const register = (username, email, password) => {
    return axios.post(`${API_URL}/auth/signup`, {
        username: username,
        email: email,
        password: password,
        password_confirmation: password,
    })
};

/**
 * @param email
 * @param password
 */
const login = (email, password) => {
    return axios.post(`${API_URL}/auth/login`, {
        email: email,
        password: password
    })
}

export default {
    register,
    login,
};