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
      API.saveListings({
        title: this.state.title,
        user_id: this.state.username,
        description: this.state.description
      })
        .then(res => this.loadListings())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1><span><img src="levels.png" /></span>TunedUp</h1>
        </Jumbotron>
        <Row>
          <Col size="md-3">
            <Container fluid>
            </Container>
          </Col>
          <Col size="md-1"></Col>
          <Col size="md-8">
            <div className="media">
              <div className="media-body">
                <h5 className="mt-0">
                  <span><Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" /></span></h5>
                <TextArea value={this.state.description} onChange={this.handleInputChange} name="listings" placeholder="What's your shout-out? (required)" />
                <FormBtn disabled={!(this.state.user_id && this.state.title)} onClick={this.handleFormSubmit}>post it!</FormBtn>
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
