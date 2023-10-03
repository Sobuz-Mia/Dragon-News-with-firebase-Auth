
import { initializeApp } from "firebase/app";

const all = import.meta.env;

const firebaseConfig = {
  apiKey: "AIzaSyAJH2bFCHd9fVcXgx9K-A6Lciz8Gsz4aR8",
  authDomain: "dragon-news-with-firebase-auth.firebaseapp.com",
  projectId: "dragon-news-with-firebase-auth",
  storageBucket: "dragon-news-with-firebase-auth.appspot.com",
  messagingSenderId: "1046949956926",
  appId: "1:1046949956926:web:e72743975e8a53c339b06f"
};


const app = initializeApp(firebaseConfig);