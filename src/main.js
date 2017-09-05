import Vue from 'vue'
import App from './App.vue'
import * as svgicon from 'vue-svgicon'
import './assets/icons/airplane'
import './assets/icons/beer'
import './assets/icons/heart'

Vue.use(svgicon, {
  tagName: 'icon'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
