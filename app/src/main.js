import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// firebase import
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// firebase configuration rules
const firebaseConfig = {
    apiKey: "AIzaSyC1IpFwhpgHk6Aaq3GQJWzPLbmi-JoLiTM",
    authDomain: "harkunov-88060.firebaseapp.com",
    databaseURL: "https://harkunov-88060-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "harkunov-88060",
    storageBucket: "harkunov-88060.appspot.com",
    messagingSenderId: "827265746885",
    appId: "1:827265746885:web:e5884ca0b7ed4b304a2dac",
    measurementId: "G-0KD89ZK2WD"
};

// Initialize Firebase, Firebase auth, Firebase realtime database
initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

const path = '/posts';
onValue(ref(db, path), (snapshot) => {
    store.commit('posts/clear');
    const postsObject = snapshot.val();
    for (const [key, value] of Object.entries(postsObject)) {
        store.commit('posts/addPost', value, key);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) store.commit('user/setUser', user);
    else store.dispatch('user/logout');
})



// Initialize vue application stuff
const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');