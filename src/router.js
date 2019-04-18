import Vue from 'vue'
import Router from 'vue-router'
import Matches from './views/matches.vue'
import Chat from './views/chat.vue'
import Standings from './views/standings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'matches',
      component: Matches
    },
    {
      path: '/standings',
      name: 'standings',
      component: Standings
    },
    {
      path: '/',
      name: 'chat',
      component: Chat
    }
  ]
})
