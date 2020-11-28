import React from "react";
import {Card} from "react-bootstrap"
import PhotoFooter from "../Photo_footer/Photo_footer"
import "./photo.css"

const Photo = ({item}) => {

    return (
        <Card className="col-sm-12 col-md-8 ml-auto mr-auto mt-4">
            <Card.Header className="headerPhoto">
                <h2>{item.name}</h2>
            </Card.Header>
            <Card.Img className="col-sm-12 col-md-8 ml-auto mr-auto mt-4" src={item.image_url}/>
			<Card.Body>
                <p>
                    {item.description}
                </p>
            </Card.Body>
			<Card.Footer>
				<PhotoFooter photoId={item._id} likeNumber={item.like_number}/>
			</Card.Footer>
		</Card>
    );
}

export default Photo;