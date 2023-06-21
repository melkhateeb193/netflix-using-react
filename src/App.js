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
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./privateRaoute/protectedRoutes";
import Userprofile from "./pages/userprofile/userprofile";
import MyList from "./pages/myList/myList";
import NotFound from "./pages/NotFound/notFound";
import Movies from "./pages/movies/movies";
import TvShows from "./pages/Tv Show/tvShow";
import NewPopular from "./pages/new  & popular/new-popular";
import BrowseMovies from "./pages/BrowseByLanguages/browseMovies";
// import Responsive from "./component/slider/slider";

function App() {
  return (
    <>
      <div className="App">
        {/* <Responsive></Responsive> */}
        <Routes>
          <Route path="/" element={<Mainpagebfl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/tvShows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/new" element={<NewPopular />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/movieby" element={<BrowseMovies />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
