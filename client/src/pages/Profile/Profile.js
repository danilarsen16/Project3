import React from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Image from 'react-image-resizer';

const Profile = () => {
  
  return (
    <div>
      <Row>
      <Col size="md-4">
      <Card>
        <Image top width="100%" src="https://www.biography.com/.image/t_share/MTQ1MTM5ODM2NTQ0ODIwNjMy/alicia-keys---mini-biography.jpg" alt="Card image cap" 
        height={180}
        width={318}/>
        <CardBody>
          <CardTitle>Alicia Keys</CardTitle>
          <CardSubtitle>New York, NY</CardSubtitle>
          <CardText>Instruments: Vocals, Piano</CardText>
          <CardText>Genres: R&B, Hip-Hop, Jazz, Soul</CardText>
          <Button>SoundCloud</Button>
          <Button>YouTube</Button>
        </CardBody>
      </Card>
      </Col>

      <Col size="md-8">
      <h2>Bio</h2>
        <p>Alicia Keys was born in Hell's Kitchen, Manhattan, to Teresa (Augello), a paralegal who was also an occasional actress, and Craig Cook, a flight attendant.
          Her father is African-American, and her mother, who is caucasian, is of Italian and English/Irish/Scottish ancestry. 
      </p>
      </Col>
      </Row>
    </div>
  );
};


export default Profile;
