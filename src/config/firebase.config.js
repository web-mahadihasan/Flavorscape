// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtuFOOIEZ1uygzW0aQmC-AHDGMkfWm_Bk",
  authDomain: "flavorscape-bd.firebaseapp.com",
  projectId: "flavorscape-bd",
  storageBucket: "flavorscape-bd.firebasestorage.app",
  messagingSenderId: "875051873421",
  appId: "1:875051873421:web:7cff6d8ef5f7901c0e1ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;