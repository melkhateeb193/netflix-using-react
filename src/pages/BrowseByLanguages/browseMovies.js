import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit.css";
import Browse from "./Browse";
import Header from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

export default function BrowseMovies() {
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
      <Header/>
      <Browse/>
      <div className="container-fluid">
        <div className="list-body px-5 mt-4">
          <Row xs={5} md={5} className="main-design g-2  pt-4">
            {movies.map((movie) => (
              <Col key={movie.id}>
                <Card className="card-design">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={
                      movie.data().link ? movie.data().link : movie.data().Link
                    }
                  ></Card.Img>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer/>
    </>
  );
}
