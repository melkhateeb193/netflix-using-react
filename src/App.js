import "./App.css";
import SignUp from "./pages/signUp/signUp";
import Homepage from "./pages/homepage/homepage";
import Mainpagebfl from "./pages/mainpagebeforlogin/mainpagebfl";
import Login from "./pages/login/login";
import NotFound from "./pages/NotFound/notFound";
import MyList from "./pages/myList/myList";
import TvShow from "./pages/Tv Show/tvShow";
import NewPopular from "./pages/new  & popular/new-popular";
import Moovies from "./pages/movies/movies";
import Movies from "./pages/BrowseByLanguages/Movies";
import Userprofile from "./pages/userprofile/userprofile";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute, { UseAuth } from "./privateRaoute/protectedRoutes";
import { useEffect } from "react";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpagebfl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="/tvShow" element={<TvShow />} />
            <Route path="/new" element={<NewPopular />} />
            <Route path="/movie" element={<Moovies />} />
            <Route path="/movieby" element={<Movies />} />
          </Route>


          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </>
  );
}

export default App;
