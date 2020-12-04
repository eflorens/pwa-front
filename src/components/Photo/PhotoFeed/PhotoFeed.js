import React from "react";
import { useEffect, useState } from "react";
import Photo from "../Photo"
import getPhotosList from '../../../services/PhotoService'
import axios from "axios"

const API_URL = "https://pwa-back.herokuapp.com";

const APIData = [
    {
        id: "AZE123",
        imgUrl: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    
    },
    {
        id: "AZE124",
        imgUrl: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    },
    {
        id: "AZE125",
        imgUrl: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    },
    {
        id: "AZE126",
        imgUrl: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",    
    }
]

const PhotoFeed = () => {
    const [photoData, setPhotoData] = useState([]);

    useEffect(async () => {
        const token = localStorage.getItem('token')
        console.log(token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const data = await axios.get(`${API_URL}/img`, config)
        setPhotoData(data.data)
        console.log(data)
    }, []);
    
    
    return (
        <div>
            {photoData && photoData.map((item) => {
                return <Photo key={item.id} item={item}/>
            })}
        </div>
    );
};

export default PhotoFeed;