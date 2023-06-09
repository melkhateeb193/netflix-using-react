import React, { useEffect, useState } from "react";
import "./heroSection.css";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import { async } from "q";
import { useForkRef } from "@mui/material";

function HereSection() {
  var videoPlaceHolder = "https://www.w3schools.com/html/mov_bbb.mp4";
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useForkRef(null);

  const handelIsMuted = () => {
    setIsMuted((currentState) => !currentState);
  };

  // const [currentTime, setCurrentTime] = useState(0);

  // const handleRestart = () => {
  //   videoRef.current.currentTime = 0;
  //   videoRef.current.play();
  // };

  // kareem's work stars here
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const [imgLink, setImageLink] = useState("./images/interstellar.webp");

  useEffect(() => {
    console.log(movies);
    // movies.forEach(movie => {
    //   console.log(movie.data());
    // });
    // console.log(movies[10].data().link);

    let imgNum = Math.floor(Math.random() * 50);
    if (movies.length == 0) {
      console.log(true);
    } else {
      console.log(false);
      setImageLink(
        movies[imgNum].data().link
          ? movies[imgNum].data().link
          : movies[imgNum].data().Link
      );
      console.log(movies[imgNum].data().name);
      console.log(movies[imgNum].data());
    }
  }, [movies, imgLink]);

  useEffect(() => {
    dispatch(getAllMovies("NetflixClone"));
  }, []);
  // kareem's work end here

  return (
    <>
      <div className="parent mb-5">
        {/* changeable background  and data*/}

        <div className="title__image ">
          <video
            className="background-video"
            ref={videoRef}
            loop={true}
            autoPlay={true}
            muted={isMuted}
            // currentTime={currentTime}
            // onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
          >
            <source src={videoPlaceHolder} type="video/mp4" />

            {/* background video */}
          </video>
        </div>
        <div className="title row">
          <div className="title__space col-1"></div>
          <div className="title__body col-7">
            {/* this is for the logo */}

            <img
              className="title__body--logo"
              src="./images/Interstellar-logo.png"
            />

            <div className="title__body--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tenetur error magni! Distinctio facere inventore iusto maxime,
              repudiandae ipsa molestiae aspernatur mollitia?
            </div>

            {/* description from api */}

            <button className="title__body--button btn1">
              <img
                className="title__body--button__element"
                src="./icons/play.svg"
              />
              <span className="title__body--button__element btn1__text">
                Play
              </span>
            </button>
            <button className="title__body--button btn2">
              <img
                className="title__body--button__element"
                src="./icons/info.svg"
              />
              <span className="title__body--button__element">More Info</span>
            </button>
          </div>
          <div class="title__aside col">
            <button
              class="title__aside--btn text-center"
              onClick={handelIsMuted}
              // onClick={handleRestart}
            >
              <img
                className="title__aside--btn__icon"
                src="./icons/restart.svg"
              />
            </button>
            <span className="title__aside--maturityRating">13+</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HereSection;
