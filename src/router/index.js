import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '@/components/navigation-bar.vue'
import Home from '@/components/home.vue'
import Collection from '@/components/collection.vue'
import Shoes from '@/components/shoes.vue'
import RacingBoots from '@/components/racing-boots.vue'
import Contact from '@/components/contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NavigationBar',
      component: NavigationBar
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/shoes',
      name: 'Shoes',
      component: Shoes
    },
    {
      path: '/racing-boots',
      name: 'RacingBoots',
      component: RacingBoots
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
