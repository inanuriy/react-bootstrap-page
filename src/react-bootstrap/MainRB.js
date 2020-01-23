import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"
import "./ReactBootstrap.css"

export default class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumboBody">
          <Container>
            <h1 className="jumboText">React Bootstrap</h1>
            <p className="jumboP">The most popular front-end framework<br></br>Rebuilt for React.</p>
            <Button className="buttonSpace" variant="outline-info" size="lg">Get Started</Button>{" "}
            <Button className="buttonSpace" variant="outline-light" size="lg">Components</Button>{" "}
            <p className="jumboV">Current version: 1.0.0-beta.16</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
