import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Profile = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-4">
          <Card Image="https://www.biography.com/.image/t_share/MTQ1MTM5ODM2NTQ0ODIwNjMy/alicia-keys---mini-biography.jpg">
            <h4>Alicia Keys</h4>
            <h6>New York, NY</h6>
            <p>Instruments: Vocals, Piano</p>
            <p>Genres: R&B, Hip-Hop, Jazz, Soul</p>
            <a href>SoundCloud</a>
            <a href>YouTube</a>
          </Card>
        </Col>

        <Col size="md-8">
          <h2>Bio</h2>
          <p>Alicia Keys was born in Hell's Kitchen, Manhattan, to Teresa (Augello), a paralegal who was also an occasional actress, and Craig Cook, a flight attendant.
            Her father is African-American, and her mother, who is caucasian, is of Italian and English/Irish/Scottish ancestry.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Profile;
