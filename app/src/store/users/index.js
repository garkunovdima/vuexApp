import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
    state() {
        return {
            user: 'user',
            email: '',
            uid: '',
        };
    },
    getters: {
        isAuth(state) {
            return state.auth != '';
        },
        auth() {
            return getAuth()
        }
    },
    mutations: {},
    actions: {
        async getUsers(context, data) {

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
        async signIn(context, data) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, data.email, data.password) // отсылаем запрос с email и password пользователя
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
                    console.log('user: ', user);
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
        },
        logOut(context) {
            context.email = '';
            context.uid = ''
        },
    }
}