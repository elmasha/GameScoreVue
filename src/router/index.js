import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import AddStory from '@/components/AddStory.vue'
import ViewStory from '@/components/ViewStory.vue'



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
        name: 'addstroy',
        component: AddStory
    },
    {
        path: '/:story_id',
        name: 'viewstory',
        component: ViewStory
    }
]

const router = new VueRouter({
    routes
})

export default router