import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Container } from "react-bootstrap-v5";

import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateMovie = (props) => {
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/movie/read_by_id.php/?movieId=" +
          props.match.params.id
      )
      .then(function (result) {
        const movie = result.data;
        setMovieName(movie.title);
        setYear(movie.year);
        setDesc(movie.description);
        setImage(movie.imageSource);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [props.match.params.id]);

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
  const handleUpdate = () => {
    axios
      .post("http://localhost:8080/api/movie/update.php", {
        movieId: props.match.params.id,
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
  };
  return (
    <Container>
      <h1 className="mt-2">Updating movie</h1>
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
              value={movieName}
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
              value={year}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Movie description :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleDescChange}
            value={desc}
          />
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
              value={image}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col className="sm">
            <Button
              type="submit"
              className="btn-danger m-2"
              style={{ float: "right" }}
              onClick={handleUpdate}
            >
              Save movie
            </Button>
            <Link
              to={`/movie/${props.match.params.id}`}
              type="submit"
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

export default UpdateMovie;
