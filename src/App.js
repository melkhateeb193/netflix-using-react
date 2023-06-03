// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
// import Login from './component/login/login';
// import Userprofile from './component/userprofile/userprofile';
import SimpleSlider from './component/slider/slider';

function App() {
  return (
    <div className="App bg-dark">
    <SimpleSlider/>
    <SimpleSlider/>

    </div>
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
