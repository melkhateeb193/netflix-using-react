import Mainpagebfl from "./component/mainpagebeforlogin/mainpagebfl";
import { Provider } from "react-redux";
import store from "./store/store/store";
import { Route, Routes } from "react-router-dom";
import Homepage from "./component/homepage/homepage";
import Movies from "./component/BrowseByLanguages/Movies";
import NotFound from "./component/NotFound/notFound";
import SignUp from "./component/signUp/signUp";
import Userprofile from "./component/userprofile/userprofile";
import Login from "./component/login/login";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Mainpagebfl />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/moviesb" element={<Movies />} />
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
