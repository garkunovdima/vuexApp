import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
    state() {
        return {
            user: 'user',
            email: '',
            password: '',
            uid: '',
        };
    },
    getters: {
        user(context) {
            return context.auth.currentUser;
        },
        isAuth(state) {
            return state.auth != '';
        },
        auth() {
            return getAuth()
        },
        curentUser(context) {
            return context.auth.currentUser;
        }
    },
    mutations: {},
    actions: {
        AuthStateChanged(context, data) {
            console.log(data);
            onAuthStateChanged(context.auth, (user) => {
                if (user) {
                    console.log("AuthStateChanged success: ", user);
                    context.uid = user.uid;
                } else {
                    console.log("AuthStateChanged failed: ", user);
                }
            });
        },
        async getUserBy(context, data) {
            console.log('data', data);

        },
        async signIn(context, data) {
            createUserWithEmailAndPassword(context.auth, data.email, data.password) // отсылаем запрос с email и password пользователя
                .then((userCredential) => { //userCredential - ответ на запрос firebase
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user: ', user);
                    // ...  
                    return 'reg ok';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('reg errorCode: ', errorCode);
                    console.log('reg errorMessage: ', errorMessage);

                    // ..
                    return 'reg ne ok';

                });
        },
        login(context, data) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user: ', user.metadata);
                    // ...
                    return 'login ok';

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('login errorCode: ', errorCode);
                    console.log('login errorMessage: ', errorMessage);
                    return 'login ne ok';

                });
            console.log('curentUser:', context.auth);
        },
        logOut(context) {
            context.email = '';
            context.uid = ''
        },
    }
}