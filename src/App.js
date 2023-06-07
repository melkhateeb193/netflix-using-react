import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpagebfl from './component/mainpagebeforlogin/mainpagebfl';
import Login from './component/login/login';
import Userprofile from './component/userprofile/userprofile';
import SimpleSlider from './component/slider/slider';
import { Provider } from 'react-redux';
import store from './store/store/store';  
import Movies from './component/BrowseByLanguages/Movies';
import Homepage from './component/homepage/homepage';
import Header from './component/navbar/navbar';

function App() {
  return (
 <>
 <Provider store={store}>
    <Router>
   
      <div className="App"> 
      <Header></Header>
        <Routes>
        <Route path="/" element={<Mainpagebfl />} />  
          <Route path="/login" element={<Login/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/user" element={<Userprofile />} /> 
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </Router> 
 
    {/* <div className="App bg-dark">
    <SimpleSlider/>
    <SimpleSlider/>

    </div> */}
    
    </Provider>
 </>
  );
}
 

export default App;
