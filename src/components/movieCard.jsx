import React from "react";
import { Col } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const MovieCard = ({ view, lg, movies }) => {
  // const movie = [
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
      {movies &&
        movies.map((m) => {
          return (
            <Col lg={lg} className={`m-2 ${view}`}>
              <Link to={`/movie/${m.movieId}`}>
                <h3 className=" " style={{}}>
                  {m.title} <span style={{ fontSize: "20px" }}>({m.year})</span>
                </h3>
                <img src={m.imageSource}></img>
              </Link>
            </Col>
          );
        })}
    </>
  );
};

export default MovieCard;
