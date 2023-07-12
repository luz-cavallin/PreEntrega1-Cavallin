import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA77IPGGdHor24bVxcoHJYeLQRDis3zr58",
  authDomain: "vinoteca-sierras-chicas.firebaseapp.com",
  projectId: "vinoteca-sierras-chicas",
  storageBucket: "vinoteca-sierras-chicas.appspot.com",
  messagingSenderId: "763017915412",
  appId: "1:763017915412:web:cf62b291635d9fd972cb01",
};

const app = initializeApp(config);
export const db = getFirestore(app);
