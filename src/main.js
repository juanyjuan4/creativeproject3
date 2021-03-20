import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  profileList: [],
  pictures: [
    {id: require('@/images/avatar1.png')},
    {id: require('@/images/avatar2.png')},
    {id: require('@/images/avatar3.png')},
    {id: require('@/images/avatar4.png')},
    {id: require('@/images/avatar5.png')},
    {id: require('@/images/avatar6.png')},
    {id: require('@/images/avatar7.png')},
    {id: require('@/images/avatar8.png')},
    {id: require('@/images/avatar9.png')},
    {id: require('@/images/avatar10.png')}
  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
