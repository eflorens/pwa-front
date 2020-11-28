import React from "react";
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo"

const APIData = [
    {
        _id: "AZE123",
        name: "photo 1",
        like_number: 18,
        image_url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
        description: "Un peut de lecture"
    },
    {
        _id: "AZE124",
        name: "photo 2",
        like_number: 8,
        image_url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
        description: "Un peut de lecture"
    },
    {
        _id: "AZE125",
        name: "photo 3",
        like_number: 1,
        image_url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
        description: "Un peut de lecture"
    },
    {
        _id: "AZE126",
        name: "photo 4",
        like_number: 108,
        image_url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
        description: "Un peut de lecture"
    }
]

const PhotoFeed = () => {
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        setPhotoData(APIData)
    }, []);
    
    
    return (
        <div>
            {photoData && photoData.map((item) => {
                return <Photo key={item._id} item={item}/>
            })}
        </div>
    );
};

export default PhotoFeed;