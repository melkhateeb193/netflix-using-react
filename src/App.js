// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
// import Login from './component/login/login';
// import Userprofile from './component/userprofile/userprofile';
import Header from "./component/navbar/navbar";
import HereSection from "./component/heroSection/heroSection";
import Footer from "./component/footer/footer";
import SimpleSlider from "./component/slider/slider";
import "./App.css";
import Login from "./pages/login/login";
import Mainpagebfl from "./pages/mainpagebeforlogin/mainpagebfl";
import SignUp from "./pages/signUp/signUp";

import Homepage from "./pages/homepage/homepage";

import SliderProgress from "./component/slider/slider";
import Movies from "./pages/movies/movies";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Header /> */}
      <Movies />
      {/* <HereSection /> */}
      {/* <Footer /> */}
    </>

    // <>
    //   <div className="App bg-dark">
    //     <SimpleSlider />
    //     <SimpleSlider />
    //   </div>
    // </>
    // <Router>
    //   <div className="App">
    //     <Routes>
    // {/* //       <Route path="/" element={<Mainpagebfl />} />
    // //       <Route path="/login" element={<Login />} />
    // //       <Route path="/profile" element={<Userprofile />} />
    // //       <Route path="/home" element={<Homepage/>} /> */}
    //          {/* <Route path="/" element={<Homepage/>} /> */}
    //     </Routes>
    //    </div>
    //  </Router>
  );
}

export default App;
