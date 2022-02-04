import { createStore } from 'vuex'
import userFolder from './user/index.js'
import postsFolder from './posts/index.js'

export default createStore({
    state() {
        return {

        };
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: { user: userFolder, posts: postsFolder }
})