import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../components/Loading.vue'
const LoginForm = () => import('../components/LoginForm.vue')
const RegisterForm = () => import('../components/RegisterForm.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    }
  ]
})

export default router
