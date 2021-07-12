import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import AddStory from '@/components/AddStory.vue'
import ViewStory from '@/components/ViewStory.vue'
import Register from '@/components/Register.vue'
import Contacts from '@/components/Contacts.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
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
  
   
]

const router = new VueRouter({
    routes
})

export default router