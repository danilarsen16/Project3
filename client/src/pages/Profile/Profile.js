import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";

const Profile = () => (
  <div>
    <Container fluid>
    <div class="bio">
      <Row>
        <Col size="md-3">
          <div>
            <img class="rounded float-right" src="https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/a0/b9/3a/a0b93aa4-0282-e495-6cef-6aae7340e280/886446159805.jpg/268x0w.jpg" style={{ width: 150, height: 150 }} alt="Generic user picture"/>
          </div>
        </Col>
        <Col size="md-5">
          <Container fluid>
          <div>
            <h3>Alicia Keys</h3>
              <p><span><img src="placeholder.png" style={{width: 20, height: 20}}/> New York, NY</span></p>
              <p><strong>Instruments: </strong>Vocals Piano</p>
              <p><strong>Genre: </strong>R&B, Jazz, Hip-Hop, Soul</p>
          </div>
          </Container>
        </Col>
      </Row>
      </div> 
    </Container>
    <Container fluid>
      <Row>
      <Col size="md-8">
        <Container fluid>
        <div class="shadow rounded top">
          <h5>ABOUT ME</h5>
          <hr></hr>
          <p>Alicia Augello Cook was born on January 25, 1981, in the Hell's Kitchen neighborhood of New York City’s Manhattan borough. She is the only child of Teresa (Augello), a paralegal and part-time actress, and one of three children of Craig Cook, a flight attendant.Key's father is African American and her mother is of Sicilian (Agrigento and Sciacca) and either Scottish or Irish descent. Named after her Puerto Rican godmother, Keys expressed that she was comfortable with her multiracial heritage because she felt she was able to relate to different cultures.</p>
        </div>
        </Container>

        <Container fluid>
        <div class="shadow rounded">
          <h5>MY POSTINGS</h5>
          <hr></hr>
          <div className="media">
            <img className="mr-3" src="https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60" style={{ width: 64, height: 64 }} alt="Generic placeholder image"/>
              <div className="media-body">
                <h5 className="mt-0">French horn needed</h5>
                  Looking for french horn to play at upcoming recital at the University of Minnesota.
            </div>
          </div>
        </div>
        </Container>
      </Col>

      <Col size="md-4">
      <Container fluid>
        <div class="shadow rounded top">
          <h6>Contact & Personal Info</h6>
          <hr></hr>
          <p><span><img src="email.png" style={{width: 20, height: 20}}/> email@email.com</span></p>
          <p><span><img src="phone.png" style={{width: 20, height: 20}}/> xxx-xxx-xxxx</span></p>
        </div>
        </Container>
      </Col>

      </Row>
      


    </Container>
  </div>
);

export default Profile;
