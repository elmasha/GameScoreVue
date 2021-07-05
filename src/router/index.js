import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import AddStory from '@/components/AddStory.vue'
import ViewStory from '@/components/ViewStory.vue'
import Register from '@/components/Register.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/addStory',
        name: 'addstory',
        component: AddStory
    },
    {
        path: '/:story_id',
        name: 'viewstory',
        component: ViewStory
    },
    {
        path: '/Register',
        name: 'register',
        component: Register
    }
]

const router = new VueRouter({
    routes
})

export default router