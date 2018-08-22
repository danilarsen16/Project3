import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const style = {
  pic: {
    width: 64,
    height: 64
  }
}

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    contact: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", contact: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        contact: this.state.contact
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>TunedUp</h1>
        </Jumbotron>
        <Row>
          <Col size="md-3">
            <Container fluid>
              <div className=" shadow-lg p-3 mb-5 bg-white rounded">
                <img className="rounded" src="https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b0cbea122ce95175f28738ac3d0719&auto=format&fit=crop&w=700&q=60" style={style.pic} alt="Generic placeholder image"/>
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
              <img className="mr-3" src="https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd180d123f5a072662e6f1cfb64bbde3&auto=format&fit=crop&w=700&q=60" style={style.pic} alt="Generic placeholder image"/>
              <div className="media-body">
                <h5 className="mt-0"> 
                <span><Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title"/></span></h5>
                <TextArea value={this.state.contact} onChange={this.handleInputChange} name="listing" placeholder="What's your shout-out? (required)"/>
                <FormBtn disabled={!(this.state.author && this.state.title)} onClick={this.handleFormSubmit}>post it!</FormBtn>
              </div>
            </div>
            <Row></Row>
            <Row>
            <div className="media">
              <img className="mr-3" src="https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60" style={style.pic} alt="Generic placeholder image"/>
                <div className="media-body">
                  <h5 className="mt-0">French horn needed</h5>
                   Looking for french horn to play at upcoming recital at the University of Minnesota.
                </div>
            </div>
            </Row>

            <Row>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                  {/* =======================below is the link to get to users profile for contact info ==========================*/}
                    <Link to={"/books/" + book._id}>
                      <font size="5" color="salmon"><strong>{book.title}</strong></font>
                      <br />
                      <br />
                      <font color="grey">Contact <strong>{book.author} </strong>@ {book.contact}</font>
                      {/* <a href="mailto:{book.contact}">Email Me</a>  */}
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
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

export default Books;
