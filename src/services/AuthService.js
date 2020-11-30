import axios from "axios";

const API_URL = "https://pwa-back.herokuapp.com";

/**
 * @param username
 * @param email
 * @param password
 */
const register = (username, email, password) => {
    return axios.post(`${API_URL}/register`, {
        username: username,
        email: email,
        password: password
    })
};

/**
 * @param email
 * @param password
 */
const login = (email, password) => {
    return axios.post(`${API_URL}/login`, {
        email: email,
        password: password
    })
}

export default {
    register,
    login,
};