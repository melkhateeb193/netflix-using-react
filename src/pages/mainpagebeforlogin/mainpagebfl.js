import React from "react";
import "./mainpagebfl.css";
import { Dropdown } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function Mainpagebfl() {
  return (
    <>
      <header className="contianer p-3 ps-4 pe-4">
        <nav className="navbar">
          <div className="container-fluid nav">
            <svg
              viewBox="0 0 111 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="default-ltr-cache-mv4tc2"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
              </g>
            </svg>
            <div className="d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="langBtn"
                >
                  <FaGlobe className="pe-1 mBtn" />
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">العربيه</Dropdown.Item>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn ms-3 mBtn d-flex" type="submit">
                {" "}
                <Link to="/login">sign In</Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="container-fluid">
        {/* section1 */}
        <section className="topSub p-5 text-white ms-4 me-4">
          <div className="topSubC w-75 p-5">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p className="p1TopSub">Plans now start at EGP70/month.</p>
            <p className="p2TopSub">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="mb-3 d-flex" id="EmailContainer">
              <input
                type="email"
                className="form-control w-50 p-3 me-2"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <button className="d-flex justify-content-center align-items-center btn pe-4 ps-3">
                <Link to="/login">Get Started</Link>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right text-white" />
              </button>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section>
          <div className="row OneandThree pe-5 ps-5 pb-3">
            <div className="col-md-6 d-flex justify-content-center flex-column text-white p-lg-5">
              <h1 className="sectionTwoH1">Enjoy on your TV.</h1>
              <p className="sectionTwoP">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="col-md-6 Img">
              <img
                className="sectionTwoimg"
                src="images/sec1.png"
                alt="sectionimg"
              />
            </div>
          </div>
          <div className="row TwoandFour pe-5 ps-5 pb-3">
            <div className="col-md-6 Img">
              <img
                className="sectionTwoimg"
                src="images/sec2.png"
                alt="sectionimg"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column text-white p-lg-5">
              <h1 className="sectionTwoH1">Watch everywhere.</h1>
              <p className="sectionTwoP">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </p>
            </div>
          </div>
          <div className="row OneandThree pe-5 ps-5 pb-3">
            <div className="col-md-6 d-flex justify-content-center flex-column text-white p-lg-5">
              <h1 className="sectionTwoH1">Create profiles for kids.</h1>
              <p className="sectionTwoP">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div className="col-md-6 Img">
              <img
                className="sectionTwoimg"
                src="images/sec3.png"
                alt="sectionimg"
              />
            </div>
          </div>
          <div className="row TwoandFour pe-5 ps-5 pb-3">
            <div className="col-md-6 Img">
              <img
                className="sectionTwoimg"
                src="images/sec4.png"
                alt="sectionimg"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column text-white p-lg-5">
              <h1 className="sectionTwoH1">
                Download your shows to watch offline.
              </h1>
              <p className="sectionTwoP">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section>
          <div className="container">
            <h1 className="text-white mb-3" id="FAQ">
              Frequently Asked Questions
            </h1>
            <Accordion>
              <Accordion.Item
                eventKey="0"
                className="accordion accordion-flush p  mb-3"
              >
                <Accordion.Header className="white-header">
                  What is Netflix ?
                </Accordion.Header>
                <Accordion.Body>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.You can watch as
                  much as you want, whenever you want without a single
                  commercial – all for one low monthly price. There's always
                  something new to discover and new TV shows and movies are
                  added every week!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="accordion accordion-flush p mb-3"
              >
                <Accordion.Header>How much does Netflix cost?</Accordion.Header>
                <Accordion.Body>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from EGP70 to EGP165 a month. No extra costs, no contracts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="accordion accordion-flush p mb-3"
              >
                <Accordion.Header> Where can i watch?</Accordion.Header>
                <Accordion.Body>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.You can also
                  download your favorite shows with the iOS, Android, or Windows
                  10 app. Use downloads to watch while you're on the go and
                  without an internet connection. Take Netflix with you
                  anywhere.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="accordion accordion-flush p  mb-3"
              >
                <Accordion.Header>How do I cancel?</Accordion.Header>
                <Accordion.Body>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className="accordion accordion-flush p  mb-3"
              >
                <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
                <Accordion.Body>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="5"
                className="accordion accordion-flush p  mb-3"
              >
                <Accordion.Header>
                  What can I watch on Netflix?
                </Accordion.Header>
                <Accordion.Body>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p className="text-white" id="ReadyP">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="mb-3 d-flex emailContainer">
              <input
                type="email"
                className="form-control  p-3 me-2 bottom"
                id="exampleFormControlInput1bottom"
                placeholder="Email address"
              />
              <button className="d-flex justify-content-center align-items-center btn pe-4 ps-3">
                {" "}
                <Link to="/login">Get Started</Link>
                <i className="fa-solid fa-chevron-right ms-1 text-white" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-5">
        <div className="container pt-5">
          <p className="text-white pt-3 pb-3" id="QuestionFooter">
            Questions? Contact us.
          </p>
          <div className="row ">
            <div className="col-md-3 ">
              <ul className="text-white" id="footerUl">
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="text-white" id="footerUl">
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="text-white" id="footerUl">
                <li>Account</li>
                <li>Investor Relations</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="text-white" id="footerUl">
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="langBtn">
              <FaGlobe className="pe-1" />
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">العربيه</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="mb-0">Netflix Egypt</p>
        </div>
      </footer>
    </>
  );
}

export default Mainpagebfl;
