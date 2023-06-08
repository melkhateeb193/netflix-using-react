import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig/firebase"



export default function getAllMovies(col){
    return async (dispatch)=>{
        await getDocs(collection(db, col)).then((docs)=>{
            // console.log(docs.docs);
            // docs.forEach((doc)=>{
            //     console.log(doc.data());
            // });
            dispatch({
                type: 'SET_ALL_MOVIES',
                payload: docs.docs ,
            });
        }).catch((err)=>{
            console.log(err);
        })
    }
}