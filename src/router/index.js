import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Header from '../views/layouts/Header.vue'
import petugasTatib from '../views/layouts/PetugasTatib.vue'
import dataSiswa from '../views/layouts/DataSiswa.vue'
import dataPelanggaran from '../views/layouts/Pelanggaran.vue'
import inputPelanggaran from '../views/layouts/InputPelanggaran.vue'
import poinSiswa from '../views/layouts/PoinSiswa.vue'
import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login, header: Navbar, footer: Footer}
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/petugasTatib',
    name: 'petugasTatib',
    components: {default: petugasTatib, header:Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dataSiswa',
    name: 'dataSiswa',
    components: {default: dataSiswa, header:Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dataPelanggaran',
    name: 'dataPelanggaran',
    components: {default: dataPelanggaran, header:Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inputPelanggaran',
    name: 'inputPelanggaran',
    components: {default: inputPelanggaran, header:Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/poinSiswa',
    name: 'poinSiswa',
    components: {default: poinSiswa, header:Header},
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
