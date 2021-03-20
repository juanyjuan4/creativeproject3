import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  profileList: [{
    name: 'John',
    username: 'johnny5',
    img: {id: require('@/images/avatar1.png')},
    bio: "Hi, my name is John! I am a student at BYU, and I am majoring is Statistics. I enjoy playing the banjo and the piano in my free time!"
  }, {
    name: 'Bobby',
    username: 'over9000',
    img: {id: require('@/images/avatar3.png')},
    bio: "My name is Bobby. I eat lots of pizza and play ultimate frisbee. I am also a professional music creator."
  }],
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
