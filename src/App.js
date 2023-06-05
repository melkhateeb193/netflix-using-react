import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
import Login from './component/login/login';
import Userprofile from './component/userprofile/userprofile';
import SimpleSlider from './component/slider/slider';

function App() {
  return (
 <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpagebfl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Userprofile />} />
        </Routes>
      </div>
    </Router> 
 
    <div className="App bg-dark">
    <SimpleSlider/>
    <SimpleSlider/>

    </div>
     
 </>
  );
}

export default App;
