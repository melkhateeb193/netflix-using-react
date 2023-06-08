import React, {  useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Form from "react-bootstrap/Form";
import "./navbar.css";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
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

  const handleSearch = () => {
    if ((inputRef.current.value === null) | (inputRef.current.value === "")) {
      setIsOpened((currentState) => !currentState);
    }
  };
  const handleInputFocus = () => {
    inputRef.current.focus();
  };
  const handleSearchBar = () => {
    handleSearch();
    handleInputFocus();
  };
  const clearSearchInput = () => {};

  return (
    <>
      <div className={isScrolled ? "sticky scrolled" : "sticky"}>
        <Navbar className="navbar justify-content-around" expand="lg" id="navbar">
          <Container className="container-fluid m-0 p-0">
            <Navbar.Brand className="navbar__brand">
              <Nav.Link>
                <img
                  className="navbar__logo"
                  src="./icons/NetflixLogo.svg"
                  alt="Netflix Logo"
                />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNetflix__navbar--Toggle">
              <img
                className="navbar__logo"
                src="./icons/NetflixLogo.svg"
                alt="Netflix Logo"
              />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="mainNetflix__navbar--Toggle"
              className="navbar-collapse block"
            >
              <Nav className="me-auto  mb-2 mb-lg-0">
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav__link" to="/">
                  TV Shows
                </NavLink>
                <NavLink className="nav__link" to="/">
                  Movies
                </NavLink>
                <NavLink className="nav__link" to="/">
                  New & Popular
                </NavLink>
                <NavLink className="nav__link" to="/">
                  My List
                </NavLink>
                <NavLink className="nav__link" to="/">
                  Browse by Languages
                </NavLink>
              </Nav>

              <Nav className="d-flex hide">
                {/* search part */}
                <Form className={isOpened ? "search search__open" : "search"}>
                  <img
                    className="search__icon"
                    src="./icons/search.svg"
                    alt="search"
                    onClick={handleSearchBar}
                  />
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Title, people, genres"
                    className="search__input"
                    aria-label="Search"
                    onBlur={handleSearch}
                    value={searchValue}
                  />
                  <img
                    className={
                      searchValue
                        ? "search__close theSearchHasValue"
                        : "search__close"
                    }
                    src="./icons/close.svg"
                    alt="close"
                  />
                </Form>
                {/* the end ot the search component */}

                <NavLink className="nav__link" as={Link} to="/">
                  Kids
                </NavLink>

                {/* this well be fixed notifications part */}
                <div className="nav-element notifications">
                  <a className="navbar__btn">
                    <img src="./icons/bell.svg" />
                  </a>
                  <div className="notifications__body">
                    <img
                      className="notifications__body--arrow"
                      src="./icons/arrow down.svg"
                    />
                    {/* this is the part we gonna repeat */}
                    <div className="notifications__grid">
                      <img
                        className="notifications__grid--img"
                        src="./images/notification.jpg"
                      />
                      <div className="notifications__grid--section">
                        <div>New Arrival</div>
                        <div>The Diplomat</div>
                        <span>1 day ago</span>
                      </div>
                    </div>
                    {/* this is the end of notifications repetend part */}
                  </div>
                </div>
                {/* this is the end of notifications part */}

                {/* this is the user dashboard access point */}
                <div className="nav-element profile arrowP">
                  <a className="navbar__btn row arrowP">
                    {/* add a user profile here  */}

                    <span className=" col p-0 m-0 d-flex justify-content-center arrowP">
                      <img className="profile__picture " src="./icons/p4.png" />
                    </span>
                    <span className="col-4 p-0 m-0 d-flex justify-content-center arrow">
                      <img
                        className="profile__menu--toggle"
                        src="./icons/arrow down.svg"
                      />

                      {/* i might need a little help here */}
                    </span>
                  </a>
                  <div className="profile__menu">
                    <img
                      className="profile__menu--arrow"
                      src="./icons/arrow down.svg"
                    />
                    <ul className="profile__menu--list">
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="#">
                          User 1
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="#">
                          User 2
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="#">
                          User 3
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg1"
                          src="./icons/kids.png"
                        />
                        <a className="profile__menu--btn" href="#">
                          Kids
                        </a>
                      </li>
                    </ul>
                    <ul className="profile__menu--list">
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg2"
                          src="./icons/pen.svg"
                        />
                        <a className="profile__menu--btn" href="/Userprofile">
                          Manage Profiles
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg2"
                          src="./icons/transfer.svg"
                        />
                        <a className="profile__menu--btn" href="#">
                          Transfer Profile
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg2"
                          src="./icons/profile.svg"
                        />
                        <a className="profile__menu--btn" href="#">
                          Account
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                          className="profile__menu--listImg2"
                          src="./icons/help.svg"
                        />
                        <a className="profile__menu--btn" href="#">
                          Help Center
                        </a>
                      </li>
                    </ul>
                    <ul className="profile__menu--listEnd">
                      <li className="profile__menu--listItem">
                        <a className="profile__menu--btn" href="/index.html">
                          Sign out of Netflix
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* this is the end of the user dashboard access point */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
