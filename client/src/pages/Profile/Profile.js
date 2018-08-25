import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";
import { Link } from "react-router-dom";

class Profile extends Component {
 state = {
  username: "Alicia Keys",
  location: "New York, NY",
  instruments: "Vocals, Piano",
  genres: "R&B, Jazz, Hip-Hop, Soul",
  bio: "Alicia Augello Cook was born on January 25, 1981, in the Hell's Kitchen neighborhood of New York City’s Manhattan borough. She is the only child of Teresa (Augello), a paralegal and part-time actress, and one of three children of Craig Cook, a flight attendant.Key's father is African American and her mother is of Sicilian (Agrigento and Sciacca) and either Scottish or Irish descent. Named after her Puerto Rican godmother, Keys expressed that she was comfortable with her multiracial heritage because she felt she was able to relate to different cultures.",

  email: "aliciakeys@email.com",
   phone: "xxx-xxx-xxxx",
  image: "https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60",

  listings: [],

  //googleuser: {}
 }

 componentDidMount() {
   
  //this.setState({googleuser: this.props.googleuser})
  //console.log(googleuser)

  //this.loadListings();
  //this.loadProfile(this.state._id);
}

 loadListings = () => {
  API.getListings()
    .then(res =>
      this.setState({ listings: res.data, title: "", username: "", description: "" })
    )
    .catch(err => console.log(err));
  };
 
  loadProfile = () => {
    API.getUser()
      .then(res =>
        this.setState({ username:"", location:"", instruments:"", genres:"", bio:"", email: "", phone:"", image_url:""})
      )
      .catch(err => console.log(err));
    };

 render (){
  const googleuser = this.props.googleuser
  console.log(googleuser)
   return (
  <div>
    <Container fluid>
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
    <Link to="/myprofile/edit">Edit Profile</Link>
    </button>
    <div class="bio">
      <Row>
        <Col size="md-3">
          <div>
            <img class="rounded float-right" src={googleuser.image + 0} style={{ width: 150, height: 150 }} alt={googleuser.username}/>
          </div>
        </Col>
        <Col size="md-5">
          <Container fluid>
          <div>
            <h3>{googleuser.username}</h3>

              <p><span><img src="/placeholder.png" style={{width: 20, height: 20}}/> {googleuser.location}</span></p>
              <p><strong>Instruments: </strong>{googleuser.instruments}</p>
              <p><strong>Genre: </strong>{googleuser.genres}</p>
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
          <p>{googleuser.bio}</p>
        </div>
        </Container>

        <Container fluid>
        <div class="shadow rounded">
          <h5>MY POSTINGS</h5>
          <hr></hr>
          <div className="media">
            <img className="mr-3" src={googleuser.image + 0} style={{ width: 64, height: 64 }} alt={googleuser.username}/>
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
          <p><span><img src="/email.png" style={{width: 20, height: 20}}/> {googleuser.email}</span></p>
          <p><span><img src="/phone.png" style={{width: 20, height: 20}}/> {googleuser.phone}</span></p>
        </div>
        </Container>
      </Col>
      </Row>
    </Container>
  </div>
   );
  }
}

export default Profile;
