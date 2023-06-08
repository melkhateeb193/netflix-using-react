import React from "react";
import "./browse.css";
 
export default function Browse() {
  return (
    <>
    <div className="immg3 contianer-fluid m-4 ps-5 pe-5 pt-0 row ">
    <div className="col-md-3 immg4">
        <h3>Browse By Language</h3>
    </div>
    <div className="col-md-6 m-0 immg4">
        <div className="row">
            <div className="col-md-4 edit pt-2">
                <p>Select Your Pereferences</p>
            </div>
            <div className="col-md-4 edit m-0">
                <div className="dropdown ">
                    <a className="btn btn11 btn-sm dropdown-toggle" href="#" role="button"   data-bs-toggle="dropdown"   aria-expanded="false">
                       Languages
                    </a>
                  
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="./browseByLanguage.html">Original Language</a></li>
                        <li><a className="dropdown-item" href="./browsebbbols.html">Dabbing</a></li>
                        <li><a className="dropdown-item" href="./subtitle.html">Subtitles</a></li>
                      </ul>
                  </div>
            </div>
             
            <div className="col-md-4 edit m-0">
                <div className="dropdown">
                    <a className="btn btn11 btn-sm dropdown-toggle" href="#" role="button"   data-bs-toggle="dropdown"   aria-expanded="false">
                      English
                    </a>
                    <ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="./browseByLanguage.html">English</a></li>
                      <li><a className="dropdown-item" href="./browseArabic.html">Arabic</a></li>
                      <li><a className="dropdown-item" href="#">Fernch</a></li>
                      <li><a className="dropdown-item" href="#">German</a></li>
                      <li><a className="dropdown-item" href="#">Spanish</a></li>
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                      <li><a className="dropdown-item" href="#">Fernch</a></li>
                      <li><a className="dropdown-item" href="#">German</a></li>
                      <li><a className="dropdown-item" href="#">Spanish</a></li>
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                      <li><a className="dropdown-item" href="#">Fernch</a></li>
                      <li><a className="dropdown-item" href="#">German</a></li>
                      <li><a className="dropdown-item" href="#">Spanish</a></li>
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                      <li><a className="dropdown-item" href="#">Fernch</a></li>
                      <li><a className="dropdown-item" href="#">German</a></li>
                      <li><a className="dropdown-item" href="#">Spanish</a></li>
                    </ul>
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
                <div className="dropdown ">
                    <a className="btn btn11 btn-sm dropdown-toggle" href="#" role="button"   data-bs-toggle="dropdown"   aria-expanded="false">
                      Suggestions 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#"> Suggestions For you</a></li>
                        <li><a className="dropdown-item" href="#">Year Released</a></li>
                        <li><a className="dropdown-item" href="#">A-Z</a></li>
                        <li><a className="dropdown-item" href="#">Z-A</a></li>
                      </ul>
                  </div>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}
