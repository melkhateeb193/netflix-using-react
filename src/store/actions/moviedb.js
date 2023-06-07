import axiosInstance from "../../axiosConfig/instance"


export default function changeMovies(data){
    return (dispatch)=>{
        axiosInstance.get(data).then((res)=>{
            dispatch({
                type:"SET_MOVIES",
                payload:res.data.results
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}