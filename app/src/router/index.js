import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Saved from '../views/Saved.vue'
import SavedList from '../views/savedList.vue'
import profilePage from '../views/profilePage.vue'
import Registration from '../views/Registration.vue'
import CRUD from '../views/crud.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/saved',
        name: 'Saved',
        component: Saved
    },
    {
        path: '/saved/:id/:listid',
        name: SavedList,
        component: SavedList
    },
    {
        path: '/profile/:id',
        name: profilePage,
        component: profilePage
    },
    {
        path: '/reg',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/crud',
        name: 'CRUD',
        component: CRUD
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router