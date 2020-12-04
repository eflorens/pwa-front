import axios from "axios"

const API_URL = "https://pwa-back.herokuapp.com";

const getUserPhotosList = async (userId) => {

    const token = localStorage.getItem('token') != null;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const data = await axios.get(`${API_URL}/img`, config)


    console.log("getUserPhotosList", )
}

async function getPhotosList() {
    const token = localStorage.getItem('token') != null;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const data = await axios.get(`${API_URL}/img`, config)

    console.log(data)
    if (data)
        return (data);
     else
        return null;
}

const postNewPhoto = async () => {
    const data = await axios.post();

    if (data)
        return data;
    else
        return null;
}

export default {
    postNewPhoto,
    getPhotosList,
    getUserPhotosList
}