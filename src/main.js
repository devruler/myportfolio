import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.config.productionTip = false

require('vue2-animate/dist/vue2-animate.min.css')
require('@fortawesome/fontawesome-free/css/all.min.css')


// Vue Typer
let VueTyperPlugin = require('vue-typer').default
Vue.use(VueTyperPlugin)
 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
