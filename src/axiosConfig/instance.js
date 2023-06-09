import axios from "axios";
import store from "../store/store/store";
import changeLoader from "../store/actions/loader";



const axiosInstance = axios.create({
    // baseURL: "https://fakestoreapi.com/products",
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
    params:{
        api_key: 'a29b764d285577543b22f1b2ee8f8ff5'
    }

});
axiosInstance.interceptors.request.use((req) => {
    // if(req.method === 'POST'){

    // }else if(req.method == 'GET'){
    //     req.headers = {}
    // }

    store.dispatch(changeLoader(true));
    console.log("Request Send");

    return req;
}, (err) => {
    return Promise.reject(err);
});


axiosInstance.interceptors.response.use((res) => {

    console.log("Response received");
    store.dispatch(changeLoader(false));

    return res;

}, (err) => {
    return Promise.reject(err);
})

export default axiosInstance;