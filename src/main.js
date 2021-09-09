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
import Tweet from 'vue-tweet'
Vue.use(Tweet)

window.Slug = require('slug');
window.Slug.defaults.mode = 'rfc3986';





import Sharethis from 'vue-sharethis'

Vue.use(Sharethis)

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

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing)



import VueMeta from 'vue-meta'


Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})


import InstagramEmbed from 'vue-instagram-embed';
Vue.use(InstagramEmbed)

import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

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

import '@toast-ui/editor/dist/toastui-editor.css';


import { Editor } from '@toast-ui/vue-editor';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import { Viewer } from '@toast-ui/vue-editor';


Vue.component('editor', Editor)
Vue.component('viewer', Viewer)

Vue.use(Viewer)
Vue.use(Editor)


import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

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