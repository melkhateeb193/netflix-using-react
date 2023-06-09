import React, { useEffect } from "react";
import "./userprofile.css";

// import { useDispatch, useSelector } from "react-redux";
// import { changeLoader } from "../../store/actions/loader";
function Userprofile() {
  // var loader = useSelector((state) => state.loader.loader);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(changeLoader((loader = true)));
  }, []);
  return (
    <div className="container p-5 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="mt-5 mb-2">who's watching?</h1>
      <div className="container row p-5 w-100 ">
        <div className="col-md text-center ">
          <div className="box">
            <a href="/login">
              {" "}
              <img className="img" src="images/smile1.png" alt="" />
            </a>
          </div>
          <p>
            <a href="/src/component/homepage/homepage.js">Mostafa Magdy</a>
          </p>
        </div>
        <div className="col-md text-center ">
          <div className="box">
            <a href="/login">
              {" "}
              <img className="img"src="images/smile1.png" alt="" />
            </a>
          </div>
          <p>
            <a href="/src/component/homepage/homepage.js">Mostafa Ali</a>
          </p>
        </div>{" "}
        <div className="col-md text-center ">
          <div className="box">
            <a href="/login">
              {" "}
              <img className="img"src="images/smile1.png" alt="" />
            </a>
          </div>
          <p>
            <a href="/src/component/homepage/homepage.js">Abdel Rahman Alaa</a>
          </p>
        </div>{" "}
        <div className="col-md text-center ">
          <div className="box">
            <a href="/login">
              {" "}
              <img className="img"src="images/smile1.png" alt=""/>
            </a>
          </div>
          <p>
            <a href="/src/component/homepage/homepage.js">Kareem Awad</a>
          </p>
        </div>
        <div className="col-md text-center">
          <a href="/login">
            {" "}
            <div className="boxAdd  d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-circle-plus fa-5x" />
            </div>{" "}
          </a>
          <p>Add Profiles</p>
        </div>
      </div>
      <button className="btn btn-outline-dark text-white">
        Manage profiles
      </button>
    </div>
  );
}

export default Userprofile;
