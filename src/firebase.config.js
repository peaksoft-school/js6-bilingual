import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUfY56heQE9swf-SDAqVM2Dx9-dVNJDSU",
    authDomain: "bilingual-auth.firebaseapp.com",
    projectId: "bilingual-auth",
    storageBucket: "bilingual-auth.appspot.com",
    messagingSenderId: "913891698379",
    appId: "1:913891698379:web:4fc6ed1cff20b6af875d4e",
    measurementId: "G-LGQ3CPEX6D",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
