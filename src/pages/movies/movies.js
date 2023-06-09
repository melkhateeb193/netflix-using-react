import React, { useState, useEffect } from "react";
import HereSection from "../../component/heroSection/heroSection";
import "./movies.css";
import Footer from "../../component/footer/footer";
import SliderProgress from "../../component/slider/slider";
import Header from "../../component/navbar/navbar";

function Movies() {
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

  return (
    <>
      <Header />
      <div className="movies">
        <div
          className={
            isScrolled
              ? "movies__secondaryNavbar movies__scrolled"
              : "movies__secondaryNavbar"
          }
        >
          <nav className="navbar">
            <div className="row">
              <div className="col">
                <a className="navbar-brand brand2" href="#">
                  Movies
                </a>
              </div>
              <div className="col">
                <div className="genres" role="button" onclick="openGenres()">
                  <label className="genres__label">Genres</label>
                  <span className="genres__arrow">
                    <img src="./icons/arrow down.svg" />
                  </span>
                </div>
                <div className="genres__grid">
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Action
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Dramas
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Romance
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Anime
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Earth Month
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Sci-Fi
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Award-Winning
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Egyptian Movies
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Shorts
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Children & Family
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Fantasy
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Sports
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Classics
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Hollywood
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Stand-Up Comedy
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Comedies
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Horror
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Thriller
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Crime
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Independent
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#"></a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Documentaries
                    </a>
                  </div>
                  <div className="genres__grid--item">
                    <a className="genres__grid--link" href="#">
                      Music & Musicals
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="group__btn">
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
              <div className="group__btn">
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
        <HereSection className="movies__mainNavbar" />
        <div className="movies__body">
          {/* <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress />
          <SliderProgress /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Movies;
