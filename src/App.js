<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
import Login from './component/login/login';
import Userprofile from './component/userprofile/userprofile';
import SimpleSlider from './component/slider/slider';
import { Provider } from 'react-redux';
import store from './store/store/store';  
import Movies from './component/BrowseByLanguages/Movies';
import Homepage from './component/homepage/homepage';

function App() {
  return (
 <>
 <Provider store={store}>
    <Router>
      <div className="App"> 
        <Routes>
        <Route path="/" element={<Movies />} />
          {/* <Route path="/" element={<Mainpagebfl />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/user" element={<Userprofile />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/home" element={<Homepage />} /> */}
        </Routes>
      </div>
    </Router> 
 
    {/* <div className="App bg-dark">
    <SimpleSlider/>
    <SimpleSlider/>

    </div> */}
    
    </Provider>
 </>
=======
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
// import Login from './component/login/login';
// import Userprofile from './component/userprofile/userprofile';
import Header from "./component/navbar/navbar";
import HereSection from "./component/heroSection/heroSection";
import Footer from "./component/footer/footer";
import SimpleSlider from "./component/slider/slider";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HereSection />
      <Footer />
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
>>>>>>> Abdo
  );
}

export default App;
