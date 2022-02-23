import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap-v5";
import { Link, NavLink } from "react-router-dom";
const NetflixNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          Hooman <span style={{ color: "red" }}>Netflix</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/movies">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newMovie">
                  Add new movie
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
