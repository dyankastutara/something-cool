import Vue from 'vue'
import Router from 'vue-router'
import StickyNote from '@/components/StickyNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StickyNote',
      component: StickyNote
    }
  ]
})
