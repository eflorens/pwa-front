import React from "react";
import {Card} from "react-bootstrap"
import PhotoFooter from "./Photo_footer/Photo_footer"
import "./photo.css"

const Photo = ({item}) => {

    return (
        <Card className="col-sm-12 col-md-8 ml-auto mr-auto mt-4">
            <Card.Header>{item.postedBy}</Card.Header>
            <Card.Img className="col-sm-12 col-md-8 ml-auto mr-auto mt-4" src={item.imgUrl}/>
		</Card>
    );
}

export default Photo;