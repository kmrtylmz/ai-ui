import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresLogin:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/About.vue'),
    meta:{
      noUser:true
    }
  },
  { 
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLogin) && !store.state.Auth.isAuthenticated) next({ name:'Login' })
  else next()

  if(to.meta.noUser && store.state.Auth.currentUser && store.state.Auth.currentUser.roles.includes(1)) next({ name: 'Home'});
  else next()
})


export default router
