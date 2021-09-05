import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWUSvpWnMj8QAEaX9L9z5JuwnKv5XF9lE",
  authDomain: "easy-chat-b35ce.firebaseapp.com",
  projectId: "easy-chat-b35ce",
  storageBucket: "easy-chat-b35ce.appspot.com",
  messagingSenderId: "344275224801",
  appId: "1:344275224801:web:e0b32b32504b94d9280fa0",
  measurementId: "G-0YGHEVE69G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
