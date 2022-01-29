import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Saved from '../views/Saved.vue'
import Profile from '../views/Profile.vue'
import Registration from '../views/Registration.vue'
import Tests from '../views/Tests.vue'
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
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/reg',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/tests',
        name: 'Tests',
        component: Tests
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