import React, { useState, useEffect } from "react";
import HereSection from "../../component/heroSection/heroSection";
import "./tvShow.css";
import Footer from "../../component/footer/footer";
import SliderProgress from "../../component/slider/slider";
import Header from "../../component/navbar/navbar";

function TvShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [inGenres, setInGenres] = useState(false);
  const [genresTitle, setGenresTitle] = useState("");
  const [sliders, setSliders] = useState([
    { title: "Top Picks for you" },
    { title: "Trending Now" },
    { title: "Middle Eastern tvShows" },
    { title: "Modern Classic Movies based on Books" },
    { title: "Blockbuster tvShows" },
    { title: "Mystery tvShows" },
    { title: "Continue Watching for you" },
    { title: "Comedies" },
    { title: "Movies Based on Real Life" },
    { title: "Romantic Drama Movies" },
    { title: "Top 10 Movies in Egypt Today" },
    { title: "Award-Winning Films" },
    { title: "Egyptian Movies" },
    { title: "Comedy Movies" },
    { title: "Feel-good Movies" },
    { title: "Emotional Movies" },
    { title: "Critically-acclaimed Heartfelt Movies" },
    { title: "My List" },
  ]);
  const [genres, setGenres] = useState([
    { title: "Action" },
    { title: "Dramas" },
    { title: "Romance" },
    { title: "Anime" },
    { title: "Earth Month" },
    { title: "Sci-Fi" },
    { title: "Award-Winning" },
    { title: "Egyptian Movies" },
    { title: "Shorts" },
    { title: "Children & Family" },
    { title: "Fantasy" },
    { title: "Sports" },
    { title: "Classics" },
    { title: "Hollywood" },
    { title: "Stand-Up Comedy" },
    { title: "Comedies" },
    { title: "Horror" },
    { title: "Thriller" },
    { title: "Crime" },
    { title: "Independent" },
    { title: "" },
    { title: "Documentaries" },
    { title: "Music & Musicals" },
  ]);

  const back = () => {
    setInGenres(true);
    setIsOpened(false);
  };

  // const openGenre = (e)={
  // }

  const handleGenres = () => {
    setIsOpened((currentState) => !currentState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
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

  return (
    <>
      <Header />
      <div className="tvShows">
        <div
          className={
            isScrolled
              ? "tvShows__secondaryNavbar tvShows__scrolled"
              : "tvShows__secondaryNavbar"
          }
        >
          <nav className="navbar">
            <div className="row">
              <div className="col">
                <a
                  className={
                    inGenres
                      ? "navbar-brand insideGenres"
                      : "navbar-brand insideGenres displayNone"
                  }
                  href="#"
                  onClick={() => setInGenres(false)}
                >
                  Tv Shows &raquo;
                </a>
                <a
                  className={
                    inGenres
                      ? "navbar-brand brand2"
                      : "navbar-brand brand2 displayNone"
                  }
                  href="#"
                >
                  {genresTitle}
                </a>
                <a className="navbar-brand brand2" href="#">
                  Tv Shows
                </a>
              </div>
              <div className={inGenres ? "col displayNone" : "col"}>
                <div
                  className={isList ? "genres displayNone" : "genres"}
                  role="button"
                  onClick={handleGenres}
                >
                  <label className="genres__label">Genres</label>
                  <span className="genres__arrow">
                    <img src="./icons/arrow down.svg" />
                  </span>
                </div>
                <div
                  className={
                    isOpened ? "genres__grid genres__openGrid" : "genres__grid"
                  }
                >
                  {genres.map((genre, index) => (
                    <div className="genres__grid--item" key={index}>
                      <a
                        className="genres__grid--link"
                        value={genre.title}
                        onClick={() => {
                          back();
                          setGenresTitle(genre.title);
                        }}
                      >
                        {genre.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group">
              <div className="group__btn" onClick={() => setIsList(false)}>
                <input
                  type="radio"
                  name="style"
                  id="list"
                  className="group__btn--input"
                  checked
                />
                <label for="list">
                  <img className="group__btn--icon" src="./icons/list.svg" />
                </label>
              </div>
              <div className="group__btn" onClick={() => setIsList(true)}>
                <input
                  type="radio"
                  name="style"
                  id="grid"
                  className="group__btn--input"
                />
                <label for="grid">
                  <img className="group__btn--icon" src="./icons/grid.svg" />
                </label>
              </div>
            </div>
          </nav>
        </div>
        <div
          className={
            isList ? "tvShows__mainNavbar displayNone" : "tvShows__mainNavbar"
          }
        >
          <HereSection />
        </div>
        <div className="tvShows__body">
          {sliders.map((slider, index) => (
            <div key={index}>
              <SliderProgress title={slider.title} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TvShows;
