 
import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [user, setUser] = useState([
    {
        name:"",
        confirmpass:"",
      email: "",
      password: "",
    },
  ]);
  const [error, setError] = useState([
    {
        nameerror:"",
        confirmpasserror:"",
      emailError: "",
      passError: "",
    },
  ]);
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
   

    navigate('/home');
  };
  const LogInNav =()=>{
navigate('/login');
  }
  const handleChange = (ev) => {
    if (ev.target.name === "email") {
      setUser({ ...user, email: ev.target.value });
      setError({
        ...error,
        emailError:
          ev.target.value.length === 0
            ? "Enter Your Email"
            : ev.target.value.length <= 10
            ? "Email must be at least 10"
            : !validateEmail(ev.target.value)
            ? "Please enter a valid email"
            : "",
      });
    } else if (ev.target.name === "password") {
      setUser({ ...user, password: ev.target.value });
      setError({
        ...error,
        passError:
          ev.target.value.length === 0
            ? "Enter Password "
            : ev.target.value.length <= 8
            ? "Password must be at least 8"
            : !validatePassword(ev.target.value)
            ? "Please enter a valid password"
            : "",
      });
    }
     else if (ev.target.name === "confirmpassword") {
      setUser({ ...user, confirmpass: ev.target.value });
      setError({
        ...error,
        confirmpasserror:
          ev.target.value.length === 0
            ? "Enter Password "
            : ev.target.value.length <= 8
            ? "Password must be at least 8"
            : ev.target.value!==user.password
            ? "the PassWord not confirmed"
            : "",
      });
    }
      else if (ev.target.name === "name") {
      setUser({ ...user, name: ev.target.value });
      setError({
        ...error,
        nameerror:
          ev.target.value.length === 0
            ? "Enter Name "
            : ev.target.value.length <= 8
            ? "Name must be at least 8"
            :""
      });
    }
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (pass) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(String(pass).toLowerCase());
  };

  return (
    <div className="BackGround">
      <header className="">
        <nav className="navbar">
          <div className="container" id="netflixLogoContainer">
            <a className="navbar-brand" href="-">
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
            </a>
          </div>
        </nav>
      </header>
      <main className="container p-5">
        <form className="text-white p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <p className="signIn">Sign Up</p>
            <input
              type="text"
              name="name"
              required
              className="form-control p-3"
              id="exampleInputname1"
              placeholder="Mustafa Ali"
              onChange={(e) => {
                handleChange(e);
              }} 
            /> 
            <p className="text-danger">{error.nameerror}</p>
           
          </div>
          <div className="mb-3">
          <input
              type="email"
              required
              className="form-control p-3"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email or phone number"
              onChange={(e) => {
                handleChange(e);
              }}
            /> 
            <p className="text-danger">{error.emailError}</p>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              required
              className="form-control p-3"
              id="exampleInputPassword1"
              placeholder="password"
              onChange={(e) => {
                handleChange(e);
              }} 
            /> 
            <p className="text-danger">{error.passError}</p>
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="confirmpassword"
              required
              className="form-control p-3"
              id="exampleInputPassword2"
              placeholder="confirm password"
              onChange={(e) => {
                handleChange(e);
              }} 
            /> 
            <p className="text-danger">{error.confirmpasserror}</p>
          </div>
          <button type="submit" className="btn  w-100 p-2 mb-3">Sign In</button>
          <button type="button" onClick={LogInNav} className="btn  w-100 p-2 mb-3">Logn In</button>
         
        </form>
      </main>
      <footer className=" p-4 mt-5">
        <div className="container p-4">
          <div className="row ">
            <p id="pFooter">Questions? Contact us.</p>
            <div className="col-md-3 col-sm-3 ">
              <ul>
                <li id="liColor">FAQ</li>
                <li id="liColor">Cookie Preferences</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3">
              <ul>
                <li li="" id="liColor">
                  Help Center
                </li>
                <li li="" id="liColor">
                  Corporate Information
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3">
              <ul>
                <li li="" id="liColor">
                  Terms of Use
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3">
              <ul>
                <li li="" id="liColor">
                  Privacy
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="-"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-globe pe-1" />
              English
            </a>
            <ul className="dropdown-menu bg-white">
              <li>
                <a className="dropdown-item" href="-">
                  العربيه
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="-">
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
