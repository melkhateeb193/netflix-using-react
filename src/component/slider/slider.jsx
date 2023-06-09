// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../slider/slider.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import '../slider/slider.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import changeMovies from '../../store/actions/moviedb';
import { Spinner } from 'react-bootstrap';

const SliderProgress = (props) => {
  const progressBarRef = useRef(null);
  const sliderRef = useRef(null);
  const loader = useSelector((state) => state.loader);
  const movies = useSelector((state) => state.moviesdb.movies);
  const [newMoviesPass, setNewMoviesPass] = useState([]);
  const dispatch = useDispatch();
  let arr = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6];
  function halve(arr, index) {
    return arr.filter((i, idx) => idx < index)
  }

  console.log(loader);
  const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".row").querySelector(".slider");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  };

  const onHandleClick = (handle) => {
    const progressBar = handle.closest(".row").querySelector(".progress-bar");
    const slider = handle.closest(".container").querySelector(".slider");
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = progressBar.children.length;
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }

    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  };

  const throttle = (cb) => {
    let shouldWait = false;
    let waitingArgs;

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;

      requestAnimationFrame(() => {
        shouldWait = false;
        if (waitingArgs) {
          cb(...waitingArgs);
          waitingArgs = null;
          shouldWait = true;
        }
      });
    };
  };

  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  });
  let flag = true;
  useEffect(() => {
    dispatch(changeMovies(`/movie/popular`));
    setNewMoviesPass(halve(movies, 12));
    document.addEventListener("click", (e) => {
      let handle;
      if (e.target.matches(".handle")) {
        handle = e.target;
      } else {
        handle = e.target.closest(".handle");
      }
      if (handle != null) {
        if (flag) {
          flag = false;
        } else {
          flag = true;
          onHandleClick(handle);
        }

      }
    });

    window.addEventListener("resize", throttleProgressBar);
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

    

  }, []);



  useEffect(() => {
    
      setNewMoviesPass(halve(movies, 12));
    
    // console.log(props.movies);
    // console.log(props.movies.length);

  }, [movies])


  // useEffect(() => {

  // }, [loader.loader])





  return (
    <>
      {loader.loader &&
        <div className='d-flex justify-content-center'>
          <Spinner animation="border" role="status" className='row'>
            <span className="visually-hidden col text-center">Loading...</span>
          </Spinner>
        </div>
      }
      <div className="row container-fluid">
        <div className="header-slider">
          <h3 className="slider__title ms-5">{props.title} </h3>
          <div className="progress-bar" ref={progressBarRef} />
        </div>
        <div className="container slider-container">
          <div className="handle left-handle" onClick={(e) => onHandleClick(e.target)}>
            <div className="text">‹</div>
          </div>
          <div className="slider" ref={sliderRef}>

            {loader.loader ? <>
              <Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                ></Card.Img>
              </Card>
              <Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                >
                </Card.Img>
              </Card><Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                ></Card.Img>
              </Card><Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                ></Card.Img>
              </Card><Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                ></Card.Img>
              </Card><Card className="card-design">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={'https://image.tmdb.org/t/p/w500/'}
                ></Card.Img>
              </Card>
            </> : newMoviesPass.map((movie, index) => {
              // console.log(movie);
              return (
                <Card className="card-design" key={index}>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                  ></Card.Img>
                </Card>
              )
            })}
            {/* <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card> */}
            {/* <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card>
          <Card className="card-design">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://via.placeholder.com/210/FFFFFF?text=1"
            ></Card.Img>
          </Card> */}

            {/* <img src="https://via.placeholder.com/210/FFFFFF?text=1" alt="Slider Image" />
          <img src="https://via.placeholder.com/220/FFFFFF?text=2" alt="Slider Image" />
          <img src="https://via.placeholder.com/230/FFFFFF?text=3" alt="Slider Image" />
          <img src="https://via.placeholder.com/240/FFFFFF?text=4" alt="Slider Image" />
          <img src="https://via.placeholder.com/250/FFFFFF?text=5" alt="Slider Image" />
          <img src="https://via.placeholder.com/260/FFFFFF?text=6" alt="Slider Image" />
          <img src="https://via.placeholder.com/270/FFFFFF?text=7" alt="Slider Image" />
          <img src="https://via.placeholder.com/280/FFFFFF?text=8" alt="Slider Image" />
          <img src="https://via.placeholder.com/290/FFFFFF?text=9" alt="Slider Image" />
          <img src="https://via.placeholder.com/300/FFFFFF?text=10" alt="Slider Image" />
          <img src="https://via.placeholder.com/310/FFFFFF?text=11" alt="Slider Image" />
          <img src="https://via.placeholder.com/320/FFFFFF?text=12" alt="Slider Image" />
          <img src="https://via.placeholder.com/210/FFFFFF?text=1" alt="Slider Image" />
          <img src="https://via.placeholder.com/220/FFFFFF?text=2" alt="Slider Image" />
          <img src="https://via.placeholder.com/230/FFFFFF?text=3" alt="Slider Image" />
          <img src="https://via.placeholder.com/240/FFFFFF?text=4" alt="Slider Image" />
          <img src="https://via.placeholder.com/250/FFFFFF?text=5" alt="Slider Image" />
          <img src="https://via.placeholder.com/260/FFFFFF?text=6" alt="Slider Image" />
          <img src="https://via.placeholder.com/270/FFFFFF?text=7" alt="Slider Image" />
          <img src="https://via.placeholder.com/280/FFFFFF?text=8" alt="Slider Image" />
          <img src="https://via.placeholder.com/290/FFFFFF?text=9" alt="Slider Image" />
          <img src="https://via.placeholder.com/300/FFFFFF?text=10" alt="Slider Image" />
          <img src="https://via.placeholder.com/310/FFFFFF?text=11" alt="Slider Image" />
          <img src="https://via.placeholder.com/320/FFFFFF?text=12" alt="Slider Image" /> */}
          </div>
          <div className="handle right-handle" onClick={(e) => onHandleClick(e.target)}>
            <div className="text">›</div>
          </div>
        </div>
      </div>


    </>

  );
};

export default SliderProgress;

