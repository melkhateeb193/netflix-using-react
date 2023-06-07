import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import "./browse.css";
import Card from "react-bootstrap/Card";
import "./edit.css";
import Browse from "./Browse";
export default function Movies() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(movies);
    movies.forEach((movie) => {
      // console.log(movie._document.data.value.mapValue.fields);
      console.log(movie.data());
    });
  }, [movies]);

  useEffect(() => {
    dispatch(getAllMovies("NetflixClone"));
  }, []);

  return (
    <>
      <Browse></Browse>
      <div className="contain">
        {movies.map((movie) => (
          <Card
            key={movie.data().id}
            style={{
              width: "18%",
              marginLeft: "5px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
          >
            <Card.Img
              variant="top"
              className="immg"
              style={{ position: "relative" }}
              src={`${
                movie.data().link ? movie.data().link : movie.data().Link
              }`}
            />
            <Card.Body className="showHidn">
              <Card.Title>
                {movie.data().name ? movie.data().name : movie.data().Name}{" "}
              </Card.Title>
              <Card.Text>{movie.data().description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
