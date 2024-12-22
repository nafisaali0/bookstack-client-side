import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

//from weavepdf project
// apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId

//save for secure: this project firebase info
// const firebaseConfig = {
//   apiKey: "AIzaSyDGlAwDM1WKp85qg6aju1LGhiBLsY1vVwI",
//   authDomain: "bookstack-shop.firebaseapp.com",
//   projectId: "bookstack-shop",
//   storageBucket: "bookstack-shop.firebasestorage.app",
//   messagingSenderId: "470412261513",
//   appId: "1:470412261513:web:c9475d024547771d686e58",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
