import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container"

export default class Cards extends Component {
  render() {
    return (
      <div>
        <Container>
        <CardDeck>
          <Card border="light">
            <Card.Body>
              <Card.Title>Rebuilt with React</Card.Title><br></br>
              <Card.Text>
                React-Bootstrap replaces the Bootstrap JavaScript. Each
                component has been built from scratch as a true React component,
                without unneeded dependencies like jQuery.<br></br><br></br>
                As one of the oldest
                React libraries, React-Bootstrap has evolved and grown alongside
                React, making it an excellent choice as your UI foundation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <Card.Body>
              <Card.Title>Bootstrap at its core</Card.Title><br></br>
              <Card.Text>
              Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.<br></br><br></br>
              By relying entirely on the Bootstrap stylesheet, React- Bootstrap just works with the thousands of bootstrap themes you already love.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <Card.Body>
              <Card.Title>Accessible by default</Card.Title><br></br>
              <Card.Text>
              The React component model gives us more control over form and function of each component.<br></br><br></br>
              Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        </Container>
      </div>
    );
  }
}
