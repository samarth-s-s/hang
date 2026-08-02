import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyBmNN2HlG2s80_HrSKxN4bcdC38FEZdATg",
  authDomain: "hang-812ee.firebaseapp.com",
  projectId: "hang-812ee",
  storageBucket: "hang-812ee.firebasestorage.app",
  messagingSenderId: "862446639120",
  appId: "1:862446639120:web:61114e3cd551801ea01295"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
