<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider>
    <div className="App">
      



<Routes>
  <Route path='/product' element=""/>
  <Route path='/' element=""/>
  <Route path='/about' element=""/>
  <Route path='/favourite' element=""/>
  <Route path='/movie' element="">
  
  </Route>
  <Route path='/details/:id' element=""/>
</Routes>
 
 
    </div>
    </Provider>
=======
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
>>>>>>> mostafaElkhate
  );
}

export default App;
