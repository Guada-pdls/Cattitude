import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSo1CRxGdWqSLBbvQilhmqxXNJrYON434",
  authDomain: "cattitude-79e0d.firebaseapp.com",
  projectId: "cattitude-79e0d",
  storageBucket: "cattitude-79e0d.appspot.com",
  messagingSenderId: "948055954035",
  appId: "1:948055954035:web:6d724395dc4c6b80499006"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
