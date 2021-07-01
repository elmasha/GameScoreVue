import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, BNavbar } from 'bootstrap-vue'
import vSelect from 'vue-select'
import Vuesax from 'vuesax'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import './assets/css/style.css'
import 'vuesax/dist/vuesax.css'
import ScrollBar from '@morioh/v-perfect-scrollbar'

// global register
Vue.use(ScrollBar);

///VueSax
Vue.use(Vuesax)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    ///Vue select
Vue.component('v-select', vSelect)
Vue.component('b-navbar', BNavbar)




Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')