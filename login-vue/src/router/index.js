import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import Login from '../components/Login'
import NaverAccess from "../components/NaverAccess"
import AppHeader from '../components/AppHeader.vue'
import EditorPage from '../pages/EditorPage'
import Vuex from "vuex";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/naver-access',
      name: 'NaverAccess',
      component: NaverAccess
    },
    {
      path: '/editor',
      name: 'EditorPage',
      component: EditorPage
    }
  ]
})
