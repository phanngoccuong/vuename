import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.scss'
import 'popper.js'
import jQuery from 'jquery'
import { fb } from './firebase/firebase'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

require('firebase/firestore')
Vue.use(VueFirestore, {
    key: "id", // the name of the property. Default is '.key'.
    enumerable: true //  whether it is enumerable or not. Default is true.
})




import Swal from 'sweetalert2';
window.Swal = Swal;




window.$ = window.jQuery = jQuery
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

let app = ''

fb.auth().onAuthStateChanged(function(user) {
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
    console.log(user)
})