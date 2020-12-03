import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const APIData = [
  {
    _id: "AZE123",
    name: "photo 1",
    like_number: 18,
    image_url: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    description: "Un peut de lecture"
  }
]


const Profile = ({ item }) => {
  return (
    <Container>
      <Row>
        Row 1
      </Row>
      <Row>
        Row 2
      </Row>
    </Container>
  );
};

export default Profile;
