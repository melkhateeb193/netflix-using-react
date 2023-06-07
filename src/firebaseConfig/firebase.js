import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBHntPLa0l4dS40cqjLS0vqsGe6JHlWFr0",
    authDomain: "netflix-clone-64778.firebaseapp.com",
    databaseURL: "https://netflix-clone-64778-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-64778",
    storageBucket: "netflix-clone-64778.appspot.com",
    messagingSenderId: "334113013168",
    appId: "1:334113013168:web:a7381d9bbd71f6b370ea75"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
