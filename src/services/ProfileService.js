import axios from "axios"

const API_URL = "https://pwa-back.herokuapp.com"

const getProfileInformation = async (userId) => {
    const data = await axios.post("");

    if (data)
        return data;
    else
        return null;
}