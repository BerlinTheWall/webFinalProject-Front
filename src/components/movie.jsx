import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap-v5";
import queryString from "query-string";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Movie = (props) => {
  useEffect(() => {
    if (!movie) loadData();
  }, []);
  const loadData = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/movie/read_by_id.php/?movieId=" +
        props.match.params.id
    );
    setMovie(result.data);
  };
  const [movie, setMovie] = useState();
  const handleDelete = () => {
    axios.get(
      "http://localhost:8080/api/movie/delete.php/?movieId=" +
        props.match.params.id
    );
  };

  // const movies = [
  //   {
  //     movieId: 1,
  //     title: "Joker",
  //     year: "2019",
  //     desc: "fasfeasefsf",
  //     imgSrc: "https://m.media-amazon.com/images/I/5137JIb4SQL._SL500_.jpg",
  //   },
  //   {
  //     movieId: 2,
  //     title: "Lala Land",
  //     year: "2016",
  //     desc: "fsaefasfefffffffffff",
  //     imgSrc:
  //       "https://mir-s3-cdn-cf.behance.net/project_modules/disp/14dc9947433583.587a4f83d1ac0.jpg",
  //   },
  //   {
  //     movieId: 3,
  //     title: "Interstellar",
  //     year: "2014",
  //     desc: "fsaefasfefffffffffff",
  //     imgSrc:
  //       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  //   },
  //   {
  //     movieId: 4,
  //     title: "Death note",
  //     year: "2011",
  //     desc: "fsaefasfefffffffffff",
  //     imgSrc: "https://m.media-amazon.com/images/I/61k3qe5zitL._AC_SY741_.jpg",
  //   },
  //   {
  //     movieId: 5,
  //     title: "Sins of sifu",
  //     year: "2005",
  //     desc: "Johny gives flower to sifu (Number 1 IMDB movie)",
  //     imgSrc:
  //       "https://static.displate.com/857x1200/displate/2019-08-31/09990c5c182f55851d1914ab15a88d72_5e04b748e07d9040765ac93cacdc203e.jpg",
  //   },
  //   {
  //     movieId: 6,
  //     title: "Shrek",
  //     year: "2008",
  //     desc: "Shrek gives flower to farnood",
  //     imgSrc: shrek,
  //   },
  // ];

  return (
    <>
      {movie && (
        <Container className="mt-5">
          <Row>
            <Col sm>
              <img
                src={movie.imageSource}
                style={{ paddingBottom: "5px" }}
                className="w-100"
              ></img>
            </Col>
            <Col sm>
              <h1>{movie.title}</h1>
              <h3>{movie.year}</h3>
              <p style={{ fontSize: "20px" }}>{movie.description}</p>
              <Link
                to="/"
                className="btn btn-danger w-25 mt-5 ms-2"
                style={{ float: "right" }}
                onClick={handleDelete}
              >
                Delete
              </Link>
              <Link
                to={`/update/${movie.movieId}`}
                className="btn btn-primary w-25 mt-5 ms-2"
                style={{ float: "right" }}
                // movieTitle={movie.title}
                // movieDescription={movie.description}
                // movieYear={movie.year}
                // movieImgSrc={movie.imageSource}
              >
                Update
              </Link>
              <Link
                to="/"
                className="btn btn-secondary w-25 mt-5"
                style={{ float: "right" }}
              >
                Back
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Movie;
