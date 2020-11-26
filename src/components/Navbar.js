import React, { Component } from "react";
import { Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import '../css/Navbar.css'

import hogwartsLogo from '../media/Hogwartscrest.png'

/**
 * Site's Navigation bar, links to all HTML elements inside of ./pages with default being HomePage. 
 * 
 * Update this file along with App.js if more pages need to be added to website. 
 * 
 * If you have time, try adding more pages onto the Navbar, such as adding a dropdown option, or try recoding
 * the navbar to your own personal style. 
 */

class NavbarPage extends Component {


render() {

    var facebookLink = "https://www.facebook.com/groups/215803739870619";
    var twitterLink = "https://twitter.com/wizardingworld?lang=en";

  return (
    <Navbar fixed="top" className="NavBar bg-light">
        <Navbar.Brand href="/">
        <img
                src={hogwartsLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
            />
            {' '}
            Hogwarts: School of Witchcraft
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {/* Pages within the website */}
            <Nav.Link href="/classes" > Academics </Nav.Link>
            <Nav.Link href="/founders">Founders</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
            {/* Social Media Links */}
            <Nav.Link href={facebookLink}> Facebook </Nav.Link>
            <Nav.Link  href={twitterLink}> Twitter </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarPage;