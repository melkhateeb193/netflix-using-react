// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
// import Login from './component/login/login';
// import Userprofile from './component/userprofile/userprofile';
// import Header from "./component/navbar/navbar";
// import HereSection from "./component/heroSection/heroSection";
// import Footer from "./component/footer/footer";
import SliderComponent from "./component/slider/slider";
// import "./App.css";
function App() {
  return (
    <>
    <SliderComponent/>
    </>
    // <>
    //   <Provider store={store}>
    //     <div className="App">
    //       <Routes>
    //         <Route path="/" element={<Mainpagebfl />} />
    //         <Route path="/home" element={<Homepage />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/moviesb" element={<Movies />} />
    //         <Route path="/Userprofile" element={<Userprofile />} />
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </div>
    //   </Provider>
    // </>
  );
}

export default App;
