import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvyvDiwsY_JZML2y0B1gcO0VDDDh_sCPw",
  authDomain: "split-creator.firebaseapp.com",
  projectId: "split-creator",
  storageBucket: "split-creator.appspot.com",
  messagingSenderId: "218205486668",
  appId: "1:218205486668:web:fc792cef8b726072f93ee9",
  measurementId: "G-50E2J8Y3P8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
