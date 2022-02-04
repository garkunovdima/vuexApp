//import { getDatabase, ref, update, child, set } from "firebase/database";
import { getDatabase, ref, update, set } from "firebase/database";

export default {
    namespaced: true,
    state() {
        return {
            posts: [
                { author: 'hi' }
            ]
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        }
    },
    mutations: {
        addPost(state, data) {
            state.posts.push(data);
        },
        clear(state) {
            state.posts = [];
        }
    },
    actions: {

        createPost(context, data) {
            const db = getDatabase();
            set(ref(db, '/posts/' + data.id), data);
        },

        updatePost(context, data) {
            const updates = {};
            updates['/posts/' + data.id] = data;
            const db = getDatabase();
            return update(ref(db), updates);
        },

        deletePost(context, id) {
            const updates = {};
            updates['/posts/' + id] = null;
            const db = getDatabase();
            console.log('ok');
            return update(ref(db), updates);
        }
    }
}