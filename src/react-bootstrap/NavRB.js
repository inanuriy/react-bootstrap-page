import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import GithubLogo from './images/Github.png';
import DiscordLogo from './images/Discord.png';
import "../react-bootstrap/ReactBootstrap.css";


export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: "#20232a"}} variant="dark">
          <Navbar.Brand href="#home">
            <img className="logoRB" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKmwd4WqtL-L63Pq-L3IXICLaDysbIt_c7KqLNk6Qb23z2wfCdQ&s"></img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Getting Started</Nav.Link>
            <Nav.Link href="#pricing">Components</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="versionButton" variant="outline-light" >v1.0.0-beta.16(Bootstrap 4.4)</Button>{" "}
            <img className="logoSize" src={GithubLogo} alt="Github"/>
            <img className="logoSize" src={DiscordLogo} alt="Github"/>
          </Form>
        </Navbar>
      </div>
    );
  }
}
