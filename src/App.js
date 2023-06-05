import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
import Login from './component/login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpagebfl />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
