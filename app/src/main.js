import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1IpFwhpgHk6Aaq3GQJWzPLbmi-JoLiTM",
    authDomain: "harkunov-88060.firebaseapp.com",
    projectId: "harkunov-88060",
    storageBucket: "harkunov-88060.appspot.com",
    messagingSenderId: "827265746885",
    appId: "1:827265746885:web:e5884ca0b7ed4b304a2dac",
    measurementId: "G-0KD89ZK2WD"
};

const fb = initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = createApp(App);
app.use(store);
app.use(router);
app.use(fb);

app.mount('#app');