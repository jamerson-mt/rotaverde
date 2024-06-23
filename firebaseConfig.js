// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4FomSFYtY27g1LFx5lMcFhk1mP0UFlOg",
  authDomain: "capacita-digital-app.firebaseapp.com",
  projectId: "935876111719",
  storageBucket: "project-935876111719.appspot.com",
  messagingSenderId: "935876111719",
  appId: "118286851494981311858"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

