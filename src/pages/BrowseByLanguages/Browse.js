import React, { useState, useEffect } from "react";
import "./browse.css";

export default function Browse() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div
        //   className="Browse__secondaryNavbar"
        className={
          isScrolled
            ? "Browse__secondaryNavbar Browse__scrolled"
            : "Browse__secondaryNavbar"
        }
      >
        <div className="immg3 container-fluid  ps-5 pe-5 pt-5 row ">
          <div className="col-md-3 immg4">
            <h3>Browse By Language</h3>
          </div>
          <div className="col-md-6 m-0 immg4">
            <div className="row">
              <div className="col-md-4 edit pt-2">
                <p>Select Your Pereferences</p>
              </div>
              <div className="col-md-4 edit m-0">
                <div>
                  <select className="btn btn11 btn-sm" href="#" role="button">
                    <option value={""}>Original Language</option>
                    <option value="dubbing">Dubbing</option>
                    <option value="subtitles">Subtitles</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4 edit m-0">
                <div>
                  <select className="btn btn11 btn-sm" href="#" role="button">
                    <option value={""}>English</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 immg4">
            <div className="row">
              <div className="col-md-3 edit pt-2">
                <p>Sort By</p>
              </div>
              <div className="col-md-8 edit">
                <div>
                  <select className="btn btn11 btn-sm" href="#" role="button">
                    <option value={""}>Suggestion For You</option>
                    <option value="year">Year Released</option>
                    <option value="a-Z">A - Z</option>
                    <option value="z-A">Z - A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
