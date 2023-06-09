import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./edit.css";
import Browse from "./Browse";
import Header from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../component/slider/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function Movies() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {}, [movies]);
  useEffect(() => {
    dispatch(getAllMovies("NetflixClone"));
  }, []);

  return (
    <>
      <Header></Header>
      <Browse></Browse>
      <div className="container-fluid">
        <div className="list-body pb-5 mt-4">
          <Row xs={6} md={6} className="main-design g-2 pb-5 pt-4">
            {movies.map((movie) => (
              <Col key={movie.id} className="custom-col">
                <Card className="Card" style={{ width: "14.5rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      movie.data().link ? movie.data().link : movie.data().Link
                    }
                  />
                  <Card.Body className="cardbody bg-dark">
                    <div className="d-flex">
                      <div className="d-flex">
                        <span className="icon-container me-2">
                          <FontAwesomeIcon icon={faPlay} />
                        </span>
                        <span className="icon-container me-2">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span className="icon-container me-2">
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            style={{ color: "#ffffff" }}
                          />
                        </span>
                      </div>
                      <span className="icon-container me-2 ">
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ color: "#ffffff" }}
                        />
                      </span>
                    </div>
                    <Card.Title className="text-white mt-2">
                      98% match
                    </Card.Title>
                    <div className="mt-2">
                      <span className="Age text-white border border-1 me-1">
                        18+
                      </span>
                      <span className="Age text-white">number of episodes</span>
                    </div>
                    <span className="Age text-white">Genre</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
