import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Container } from "react-bootstrap-v5";
import axios from "axios";
import { Link } from "react-router-dom";

const NewMovie = () => {
  const [movieName, setMovieName] = useState();
  const [year, setYear] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const handleNameChange = (event) => {
    setMovieName(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  const handleImgChange = (event) => {
    setImage(event.target.value);
  };
  if (movieName !== "" && year !== "" && desc !== "" && image !== "") {
    axios
      .post("http://localhost:8080/api/movie/create.php", {
        title: movieName,
        description: desc,
        year: year,
        imageSource: image,
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }
  return (
    <Container>
      <h1 className="mt-2">Add new movie</h1>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3 mt-5"
          controlId="formHorizontalEmail"
        >
          <Form.Label column sm={2}>
            Movie name :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Movie name"
              onChange={handleNameChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Year :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="Year"
              onChange={handleYearChange}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Movie description :</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleDescChange} />
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 mt-5"
          controlId="formHorizontalEmail"
        >
          <Form.Label column sm={2}>
            Movie poster :
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Movie poster"
              onChange={handleImgChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col className="sm">
            <Button
              type="submit"
              className="btn-danger m-2"
              style={{ float: "right" }}
            >
              Save movie
            </Button>
            <Link
              to="/"
              className="btn-secondary m-2 btn"
              style={{ float: "right" }}
            >
              Cancel
            </Link>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewMovie;
