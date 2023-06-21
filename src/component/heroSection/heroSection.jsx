import React, { useEffect, useRef, useState } from "react";
import "./heroSection.css";

function HereSection() {
  var videoPlaceHolder = "https://www.w3schools.com/html/mov_bbb.mp4";
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundIcon, setSoundIcon] = useState("./icons/sound up.svg");

  const handelIsMuted = () => {
    setIsMuted((currentState) => !currentState);
    if (isMuted === false) {
      setSoundIcon("./icons/sound down.svg");
    } else if (isMuted === true) {
      setSoundIcon("./icons/sound up.svg");
    }
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const showRestart = () => {
    if (videoRef.current.currentTime >= 10) {
      setIsPlaying(false);
    }
  };



  // kareem's work stars here
  // const movies = useSelector((state) => state.movies.movies);
  // const dispatch = useDispatch();
  // const [img alt=""Link, setImageLink] = useState("./images/interstellar.webp");

  // useEffect(() => {
  //   console.log(movies);
  //   // movies.forEach(movie => {
  //   //   console.log(movie.data());
  //   // });
  //   // console.log(movies[10].data().link);

  //   let img alt=""Num = Math.floor(Math.random() * 50);
  //   if (movies.length == 0) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //     setImageLink(
  //       movies[img alt=""Num].data().link
  //         ? movies[img alt=""Num].data().link
  //         : movies[img alt=""Num].data().Link
  //     );
  //     console.log(movies[img alt=""Num].data().name);
  //     console.log(movies[img alt=""Num].data());
  //   }
  // }, [movies, img alt=""Link]);

  // useEffect(() => {
  //   dispatch(getAllMovies("NetflixClone"));
  // }, []);
  // kareem's work end here

  return (
    <>
      <div className="parent mb-5">
        {/* changeable background  and data*/}

        <div className="title__image ">
          <video
            className="background-video"
            ref={videoRef}
            loop={false}
            autoPlay={true}
            muted={isMuted}
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
              alt=""
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
                alt=""
                className="title__body--button__element"
                src="./icons/play.svg"
              />
              <span className="title__body--button__element btn1__text">
                Play
              </span>
            </button>
            <button className="title__body--button btn2">
              <img
                alt=""
                className="title__body--button__element"
                src="./icons/info.svg"
              />
              <span className="title__body--button__element">More Info</span>
            </button>
          </div>
          <div class="title__aside col">
            <button
              className={
                isPlaying
                  ? "title__aside--btn text-center none"
                  : "title__aside--btn text-center "
              }
              onClick={handleRestart}
            >
              <img
                alt=""
                className="title__aside--btn__icon"
                src="./icons/restart.svg"
              />
            </button>
            <button
              className={
                isPlaying
                  ? "title__aside--btn text-center "
                  : "title__aside--btn text-center none"
              }
              onClick={handelIsMuted}
            >
              <img alt="" className="title__aside--btn__icon" src={soundIcon} />
            </button>
            <span className="title__aside--maturityRating">13+</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HereSection;
