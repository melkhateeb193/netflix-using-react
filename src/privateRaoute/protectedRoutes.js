import { Navigate, Outlet } from "react-router-dom";



const useAuth = () => {
    const user = { isLoggedIn: true }
    return user && user.isLoggedIn;
};


const ProtectedRoute = () => {
    const isAuth = useAuth();
    if (!isAuth) {
        alert("You Must Login!");
        return <Navigate to="/login" />
    }else {
        return <Outlet/>
    }

}

export default ProtectedRoute;