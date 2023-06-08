import axios from "axios";



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


export default axiosInstance;