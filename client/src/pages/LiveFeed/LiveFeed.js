import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";

import  DeleteBtn  from "../../components/DeleteBtn";

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
              <div className>
                <img className="rounded" src="https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b0cbea122ce95175f28738ac3d0719&auto=format&fit=crop&w=700&q=60" style={{ width: 64, height: 64 }} alt="Generic placeholder image" />
                <h4>Jane Doe</h4>
                <hr></hr>
                <p><strong>Instrument: </strong>Flute</p>
                <p><strong>Genre: </strong>Classical</p>
              </div>
            </Container>
          </Col>
          <Col size="md-1"></Col>
          <Col size="md-8">
            <div className="media">
              <img className="mr-3" src="https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd180d123f5a072662e6f1cfb64bbde3&auto=format&fit=crop&w=700&q=60" style={{ width: 64, height: 64 }} alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0">
                  <span><Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" /></span></h5>
                <TextArea value={this.state.description} onChange={this.handleInputChange} name="listings" placeholder="What's your shout-out? (required)" />
                <FormBtn disabled={!(this.state.user_id && this.state.title)} onClick={this.handleFormSubmit}>post it!</FormBtn>
              </div>
            </div>
            <Row></Row>


            <Row>
              <div className="media">
                <img className="mr-3" src="https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60" style={{ width: 64, height: 64 }} alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0">French horn needed</h5>
                  Looking for french horn to play at upcoming recital at the University of Minnesota.
                </div>
              </div>
            </Row>

            <Row>
              {this.state.listings.length ? (
                <List>
                  {this.state.listings.map(listings => {
                                  //       <ListItem key={listing._id}>
                                  //       {/* =======================below is the link to get to users profile for contact info ==========================*/}
                                  //       <Link to={"/listings/" + listing._id}>
                                  //         <font size="5" color="salmon"><strong>{listing.title}</strong></font>
                                  //         <br />
                                  //         <br />
                                  //         <font color="grey">description <strong>{listing.user_id} </strong>@ {listing.description}</font>
                                  //         {/* <a href="mailto:{listing.contact}">Email Me</a>  */}
                                  //       </Link>
                                  //       <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                                  //     </ListItem>
                                  //   ))}
                                  // </List>
                    return (
                    <ListItem key={listings._id}>
                    <a href={"/listings" + listings._id}>
                    <strong>
                      {listings.title} {listings.description}
                      </strong>
                      </a>

                      <DeleteBtn onClick={() => this.deleteListings(listings._id)} />
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
