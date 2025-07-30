import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyC3wY7DtOyJ_skvoc5aInm9ZH_ed5bY_00",
    authDomain: "tripmate-5579d.firebaseapp.com",
    projectId: "tripmate-5579d",
    storageBucket: "tripmate-5579d.firebasestorage.app",
    messagingSenderId: "333332279343",
    appId: "1:333332279343:web:7894662920a97f5f5156da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
