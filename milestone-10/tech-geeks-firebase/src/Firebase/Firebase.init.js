import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYBFA1IRmNTQpRzr7TVaFdcOOrJCIndt8",
  authDomain: "fir-practice-c4a81.firebaseapp.com",
  projectId: "fir-practice-c4a81",
  storageBucket: "fir-practice-c4a81.appspot.com",
  messagingSenderId: "227134025023",
  appId: "1:227134025023:web:064aca8a5972d45e5a378a",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
