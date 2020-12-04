import React from "react";
import { useEffect, useState } from "react";
import Photo from "../Photo"
import getPhotosList from '../../../services/PhotoService'
import axios from "axios"

const API_URL = "https://pwa-back.herokuapp.com";

const PhotoFeed = () => {
    const [photoData, setPhotoData] = useState([]);

    useEffect(async () => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const data = await axios.get(`${API_URL}/img/all`, config)
        setPhotoData(data.data.reverse())
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