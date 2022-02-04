import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function isValidToken(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state() {
        return {
            name: '',
            email: '',
            uid: '',
            authState: null,
            profileLink: '',
        }
    },
    getters: {
        isAuth(state) {
            return isValidToken(state.uid);
        },
        name(state) {
            return state.name;
        },
        userInfo(state) {
            return {
                name: state.name,
                email: state.email,
                uid: state.uid,
                authState: state.authState,
                profileLink: state.profileLink,
            }
        }
    },
    mutations: {
        setUser(state, data) {
            state.name = data.name;
            state.email = data.email;
            state.uid = data.uid;
            state.profileLink = data.email.slice(0, data.email.indexOf("@"));
        },
    },
    actions: {
        login(context, data) {
            const auth = getAuth();

            return signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {

                    context.state.email = userCredential.user.email;
                    context.state.uid = userCredential.user.uid;

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
        async signIn(context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.email, data.password) // отсылаем запрос с email и password пользователя
                .then((userCredential) => { //userCredential - ответ на запрос firebase
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user in signIn: ', user);
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
        async AuthStateChanged(context, data) {
            const auth = getAuth();
            console.log(data);
            return onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("AuthStateChanged success: ", user);
                    context.uid = user.uid;
                } else {
                    console.log("AuthStateChanged failed: ", user);
                }
            });
        },
        logOut(context) {
            const auth = getAuth();
            signOut(auth).then(() => {
                context.state.email = '';
                context.state.uid = '';
                context.state.name = '';
                context.state.profileLink = '';
                context.state.authState = false;

            })
        },
    },
}