import React from "react";
import "./browse.css";

export default function Browse() {
  return (
    <>
      <div className="immg3 contianer-fluid m-4 ps-5 pe-5 pt-5 row ">
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
                <select
                  className="btn btn11 btn-sm"
                  href="#"
                  role="button" 
                > 
                  <option value={""}>Original Language</option>
                  <option value="dubbing">Dubbing</option>
                  <option value="subtitles">Subtitles</option>
                </select>
              </div>
            </div>

            <div className="col-md-4 edit m-0">
            <div>
                <select
                  className="btn btn11 btn-sm"
                  href="#"
                  role="button" 
                > 
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
                <select
                  className="btn btn11 btn-sm"
                  href="#"
                  role="button" 
                > 
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
    </>
  );
}
