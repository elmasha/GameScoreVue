import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, BNavbar } from 'bootstrap-vue'
import Vuesax from 'vuesax'
import * as VueAos from 'vue-aos'
import moment from 'moment'
import VSelect from '@alfsnd/vue-bootstrap-select'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import './assets/css/style.css'
import 'vuesax/dist/vuesax.css'
import ScrollBar from '@morioh/v-perfect-scrollbar'
Vue.use(moment);

//------Vue animate aos ----
Vue.use(VueAos);

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 
Vue.use(PerfectScrollbar)


// global register
Vue.use(ScrollBar);

///VueSax
Vue.use(Vuesax)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    ///Vue select
Vue.component('v-select', VSelect)
Vue.component('b-navbar', BNavbar)




Vue.use(Vuetify)

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format("DD-MMM-YYYY HH:mm")
    }
});



Vue.config.productionTip = false

new Vue({

    router,
    render: h => h(App)
}).$mount('#app')