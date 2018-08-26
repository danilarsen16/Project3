import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";


class LiveFeed extends Component {
  state = {
    listings: [],
    title: "",
    username: "",
    description: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadProfile = () => {``
    API.getUser()
      .then(res =>
        this.setState({ username:"", location:"", instruments:"", genres:"", bio:"", email: "", phone:"", image_url:""})
      )
      .catch(err => console.log(err));
    };

  loadListings = () => {
    API.getListings()

      .then(res => this.setState({ listings: res.data }))
      .catch(err => console.log(err));
  };

  deleteListings = id => {
    API.deleteListings(id)
      .then(res => this.loadListings())
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
    if (this.state.title && this.state.username) {
      API.createListings({
        title: this.state.title,
        user_id: this.state.username,
        description: this.state.description
      })
        .then(res => this.loadListings())
        .catch(err => console.log(err));
    }
  };

  render() {
    const googleuser = this.props.googleuser
    return (
      <Container fluid>
        <Jumbotron>
          <h1><span><img src="levels.png" /></span>TunedUp</h1>
        </Jumbotron>
        <Row>
          <Col size="md-3">
            <Container fluid>
            </Container>
            <div>
            <img class="rounded" src={googleuser.image + 0} style={{ width: 64, height: 64 }} alt={googleuser.username}/>
                <h4>{googleuser.username}</h4>
                <hr></hr>
                <p><strong>Instrument: </strong>{googleuser.instruments}</p>
                <p><strong>Genre: </strong>{googleuser.genres}</p>
              </div>
          </Col>
          <Col size="md-1"></Col>
          <Col size="md-8">
            <div className="media">
              <div className="media-body">
                <form>
                  <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                  <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username (required)"/>
                <TextArea value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="What's your shout-out? (required)" />
                <FormBtn disabled={!(this.state.description && this.state.title)} onClick={this.handleFormSubmit}>post it!</FormBtn>
                </form>
              </div>
            </div>
            <Row></Row>
            <Row>
              {this.state.listings.length ? (
                <List>
                  {this.state.listings.map(listings => {
                    return (
                    <ListItem key={listings._id}>
                    <h2>
                      {listings.title} 
                      <DeleteBtn onClick={() => this.deleteListings(listings._id)} />
                      </h2>
                      <strong>Posted By: {listings.username}</strong>
                      <p>{listings.description}</p>
                    </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Posts to Display</h3>
                )}
            </Row>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default LiveFeed;
