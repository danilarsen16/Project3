import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./ProfileEdit.css";

class ProfileEdit extends Component {
 state = {
  username: "Alicia Keys",
  location: "",
  instruments: "",
  genres: "",
  bio: "",
  email: "aliciakeys@email.com",
  phone: "",
  image: "https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60",

  listings: [],

  _id: ""
 }
 componentDidMount() {
  //this.setState({_id: req.user[0]._id})
  this.loadListings();
  this.loadProfile(this.state._id);
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


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.updateUser ({
            location: this.state.location,
            instruments: this.state.instruments,
            genres:this.state.genres,
            bio: this.state.bio,
            phone: this.state.phone
        })
        .then(res => this.getUser())
        .catch(err => console.log(err))
    }

 render (){
   return (
  <div>
      <form>
    <Container fluid>
    <FormBtn onClick={this.handleFormSubmit}>
    Update Profile
    </FormBtn>
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
            <h3>{this.state.username}</h3>
              <p><span><img src="/placeholder.png" style={{width: 20, height: 20}}/><Input value={this.state.location} onChange={this.handleInputChange} name="location" placeholder="ie. New York, NY"/></span></p>
              <p><strong>Instruments: </strong><Input value={this.state.instruments} onChange={this.handleInputChange} name="instruments" placeholder="ie. Vocal, Violin"/></p>
              <p><strong>Genre: </strong><Input value={this.state.genres} onChange={this.handleInputChange} name="genres" placeholder="ie. jazz, soul"/></p>
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
          <p><TextArea value={this.state.bio} onChange={this.handleInputChange} name="bio" placeholder="About Me" /></p>
        </div>
        </Container>
      </Col>

      <Col size="md-4">
      <Container fluid>
        <div class="shadow rounded top">
          <h6>Contact & Personal Info</h6>
          <hr></hr>
          <p><span><img src="/email.png" style={{width: 20, height: 20}}/> {this.state.email}</span></p>
          <p><span><img src="/phone.png" style={{width: 20, height: 20}}/><Input value={this.state.phone} onChange={this.handleInputChange} name="phone" placeholder="ie. xxx-xxx-xxxx"/></span></p>
        </div>
        </Container>
      </Col>
      </Row>
    </Container>
    </form>
  </div>
   );
  }
}

export default ProfileEdit;
