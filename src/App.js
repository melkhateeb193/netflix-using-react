// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
// import Login from './component/login/login';
// import Userprofile from './component/userprofile/userprofile';
import Header from "./component/navbar/navbar";
import HereSection from "./component/heroSection/heroSection";
import SimpleSlider from "./component/slider/slider";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HereSection />
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
