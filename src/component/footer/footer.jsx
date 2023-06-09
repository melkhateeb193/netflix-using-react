import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="container-lg container-fluid footer mt-5 mb-lg-0">
        <div id="mainFotter" className=" text-white">
          <ul className="list-group list-group-horizontal">
            <li>
              <a className="footerIcon" href="#">
                <img
                  className="footerIconSrc"
                  src="./icons/facebook.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a className="footerIcon" href="#">
                <img
                  className="footerIconSrc"
                  src="./icons/instagram.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a className="footerIcon" href="#">
                <img
                  className="footerIconSrc"
                  src="./icons/twitter.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a className="footerIcon" href="#">
                <img
                  className="footerIconSrc"
                  src="./icons/youtube.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>

          <div
            className="row-cols-sm-1 row-cols-1 row-cols-md-4  row-cols-lg-4 row"
            id="footerLinks"
          >
            <dov className="col">
              <a className="footerLinkItem" href="#">
                Audio Description
              </a>
              <a className="footerLinkItem" href="#">
                Investor Relations
              </a>
              <a className="footerLinkItem" href="#">
                Legal Notices
              </a>
            </dov>
            <dov className="col">
              <a className="footerLinkItem" href="#">
                Help Center
              </a>
              <a className="footerLinkItem" href="#">
                Jops
              </a>
              <a className="footerLinkItem" href="#">
                Cookie Preferences
              </a>
            </dov>
            <dov className="col">
              <a className="footerLinkItem" href="#">
                Gift Cards
              </a>
              <a className="footerLinkItem" href="#">
                Terms of Use
              </a>
              <a className="footerLinkItem" href="#">
                Corporate Information
              </a>
            </dov>
            <dov className="col">
              <a className="footerLinkItem" href="#">
                Media Center
              </a>
              <a className="footerLinkItem" href="#">
                Privacy
              </a>
              <a className="footerLinkItem" href="#">
                Contact Us
              </a>
            </dov>
          </div>

          <div>
            <button id="serviceBtn" className="btn mt-4">
              Service Code
            </button>
          </div>

          <div id="INC" className="mt-4">
            © 1997-2023 Netflix, Inc.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
