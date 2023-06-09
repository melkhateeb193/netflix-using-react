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
                <a className="navbar-brand brand2" href="#">
                  tvShows
                </a>
              </div>
              <div className="col">
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
                      Egyptian tvShows
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
          <SliderProgress title="Top Picks for you" />
          <SliderProgress title="Trending Now" />
          <SliderProgress title="Middle Eastern tvShows" />
          <SliderProgress title="Modern Classic tvShows based on Books" />
          <SliderProgress title="Blockbuster tvShows" />
          <SliderProgress title="Mystery tvShows" />
          <SliderProgress title="Continue Watching for Elsa" />
          <SliderProgress title="Comedies" />
          <SliderProgress title="tvShows Based on Real Life" />
          <SliderProgress title="Romantic Drama tvShows" />
          <SliderProgress title="Top 10 tvShows in Egypt Today" />
          <SliderProgress title="Award-Winning Films" />
          <SliderProgress title="Egyptian tvShows" />
          <SliderProgress title="Comedy tvShows" />
          <SliderProgress title="Feel-good tvShows" />
          <SliderProgress title="Raunchy Comedy tvShows" />
          <SliderProgress title="Emotional tvShows" />
          <SliderProgress title="Critically-acclaimed Heartfelt tvShows" />
          <SliderProgress title="My List" />
        </div>
      </div>
      <div className="page__footer">
        <Footer />
      </div>
    </>
  );
}

export default TvShows;
