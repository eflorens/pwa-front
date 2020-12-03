import axios from "axios"

const API_URL = "https://pwa-back.herokuapp.com";

const getUserPhotosList = async (userId) => {
    const data = await axios.get()

    console.log("getUserPhotosList", )
}

const getPhotosList = async () => {
    const data = await axios.get();

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