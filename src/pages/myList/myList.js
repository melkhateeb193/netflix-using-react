import "./mylist.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import Header from "../../component/navbar/navbar";
import { removeFromList } from "../../store/actions/RemoveFromList";

function MyList() {
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

  //     const MyLists = useSelector((state) => state.moviesList.moviesList);
  //   const dispatch = useDispatch();

  //   const handleRemoveFromFavorites = (movieId) => {
  //     dispatch(removeFromList(movieId));
  //   };

  //the navbar section
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //the end of the navbar section

  return (
    <>
      <Header />

      <nav className={isScrolled ? "nav2 scrolledNav2" : "  nav2"}>
        <a className="navbar-brand brand2" href="#">
          My List
        </a>
      </nav>

      <div className="container-fluid mt-5">
        <div className="list-body px-5 mt-4">
          {/* <div className="row nav2">
            <p className="my-list mt-4">My List</p>
          </div> */}

          <Row xs={6} md={6} className="main-design g-2  pt-4">
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
    </>
  );
}

export default MyList;
