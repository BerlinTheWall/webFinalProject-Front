import React, { useState } from "react";
import { Container, Row, Form, FormControl, Button } from "react-bootstrap-v5";
import MovieCard from "./movieCard";
import { BsFillGridFill } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";

const Movies = () => {
  const [style, setStyle] = useState("movieCard-grid");
  const [n, setN] = useState(0);
  const changeView = () => {
    if (n === 0) {
      setStyle("movieCard-list");
      setN(12);
    } else {
      setStyle("movieCard-grid");
      setN(0);
    }
  };
  useEffect(() => {
    if (!movies) loadData();
  }, []);
  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/api/movie/read.php");
    setMovies(result.data.data);
  };

  const [movies, setMovies] = useState();
  const [search, setSearch] = useState();
  const handleSearch = async () => {
    const searchResult = await axios.get(
      `http://localhost:8080/api/movie/search.php?searchQuery=${search}`
    );
    setMovies(searchResult.data.data);
  };
  return (
    <Container>
      <div className="d-flex">
        <h1 style={{ display: "inline-block" }} className="mt-2">
          Movies
        </h1>
        <Form className="d-flex " style={{ height: "50px" }}>
          <FormControl
            type="search"
            placeholder="Search movie name"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button variant="outline-danger" onClick={handleSearch}>
            Search
          </Button>
        </Form>
        <Button
          className={"circle"}
          style={{
            float: "right",
            marginTop: "1.2%",
            backgroundColor: "black",
          }}
          onClick={changeView}
        >
          <BsFillGridFill style={{ marginBottom: "3px" }}></BsFillGridFill>
        </Button>
      </div>
      <Row>
        <MovieCard view={style} lg={n} movies={movies}></MovieCard>
      </Row>
    </Container>
  );
};

export default Movies;
