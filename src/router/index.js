import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Overview from '../views/Overview.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import { fb } from '../firebase/firebase'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requireAuth: true },
        children: [{
                path: 'overview',
                name: 'Overview',
                component: Overview
            },
            {
                path: 'products',
                name: 'Products',
                component: Products
            },
            {
                path: 'orders',
                name: 'Orders',
                component: Orders
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: About

    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/register',
        name: 'Register',
        component: Register

    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router