import React from "react";
import "./footer.css";


function Footer() {
  return (
    <>
      <footer class="container-lg container-fluid mt-5 mb-lg-0">
        <div id="mainFotter" class=" text-white">
          <ul class="list-group list-group-horizontal">
            <li>
              <a class="footerIcon" href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a class="footerIcon" href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="footerIcon" href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="footerIcon" href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>

          <div
            class="row-cols-sm-1 row-cols-1 row-cols-md-4  row-cols-lg-4 row"
            id="footerLinks"
          >
            <dov class="col">
              <a class="footerLinkItem" href="#">
                Audio Description
              </a>
              <a class="footerLinkItem" href="#">
                Investor Relations
              </a>
              <a class="footerLinkItem" href="#">
                Legal Notices
              </a>
            </dov>
            <dov class="col">
              <a class="footerLinkItem" href="#">
                Help Center
              </a>
              <a class="footerLinkItem" href="#">
                Jops
              </a>
              <a class="footerLinkItem" href="#">
                Cookie Preferences
              </a>
            </dov>
            <dov class="col">
              <a class="footerLinkItem" href="#">
                Gift Cards
              </a>
              <a class="footerLinkItem" href="#">
                Terms of Use
              </a>
              <a class="footerLinkItem" href="#">
                Corporate Information
              </a>
            </dov>
            <dov class="col">
              <a class="footerLinkItem" href="#">
                Media Center
              </a>
              <a class="footerLinkItem" href="#">
                Privacy
              </a>
              <a class="footerLinkItem" href="#">
                Contact Us
              </a>
            </dov>
          </div>

          <div>
            <button id="serviceBtn" class="btn mt-4">
              Service Code
            </button>
          </div>

          <div id="INC" class="mt-4">
            © 1997-2023 Netflix, Inc.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
