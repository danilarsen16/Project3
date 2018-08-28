import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
// import API from "../../utils/API";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { List, ListItem } from "../../components/List";
import "./Developers.css";


const Developers = () => (

  <div>

    <Jumbotron></Jumbotron>
    <h1 className="header">Meet the developers</h1>
    <Container fluid>
      <Row>
        <Col size="md-6">
          <div className="cardAlison">
            <img className="card-img-top" src="https://avatars1.githubusercontent.com/u/37820494?s=460&v=4" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Alison Fahy</h5>
              <a href="https://github.com/alisonfahy" className="btn btn-primary">GitHub</a>
            </div>
          </div>

        </Col>
        <Col size="md-6">
          <div className="cardDani">
            <img className="card-img-top" src="https://avatars2.githubusercontent.com/u/38441292?s=460&v=4" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Dani Larsen</h5>
              <a href="https://github.com/danilarsen16" className="btn btn-primary">GitHub</a>
            </div>
          </div>

        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <div className="cardKathleen">
            <img className="card-img-top" src="https://avatars0.githubusercontent.com/u/25208702?s=460&v=4" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Kathleen Vincent</h5>
              <a href="https://github.com/kmvincent" className="btn btn-primary">GitHub</a>
            </div>
          </div>

        </Col>
        <Col size="md-6">
          <div className="cardMarissa">
            <img className="card-img-top" src="https://avatars1.githubusercontent.com/u/35227935?s=460&v=4" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Marissa Ellingson</h5>
              <a href="https://github.com/maellingson" className="btn btn-primary">GitHub</a>
            </div>
          </div>

        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <div className="cardSonia">
            <img className="card-img-topSonia" src="https://avatars2.githubusercontent.com/u/36971616?s=460&v=4" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title-Sonia">Sonia Funkenbusch</h5>
              <a href="https://github.com/LefseTime" id= "btnSonia" className="btn btn-primary">GitHub</a>
            </div>
          </div>
        </Col>
      </Row>

    </Container>


  </div>
)

export default Developers