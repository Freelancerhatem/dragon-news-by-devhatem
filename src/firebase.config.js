
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;




// apiKey: "AIzaSyB-fmmWdRCUDYdUETI_AyxY4IVuZbh5xyQ",
//   authDomain: "dragon-news-devhatem.firebaseapp.com",
//   projectId: "dragon-news-devhatem",
//   storageBucket: "dragon-news-devhatem.appspot.com",
//   messagingSenderId: "49069957139",
//   appId: "1:49069957139:web:13cbf281748c039c6b1fe6"