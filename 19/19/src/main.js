import Vue from 'vue'
import App from './App.vue'
import Globalnie from './Globalnie.vue'

Vue.component('globalnie', Globalnie);

new Vue({
  el: '#app',
  render: h => h(App)
})
