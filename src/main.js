import Vue from 'vue'
import App from './App.vue'
import Particles from "particles.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Particles);

new Vue({
  render: h => h(App),
}).$mount('#app')
