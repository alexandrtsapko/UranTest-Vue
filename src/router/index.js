import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/web-editor',
    name: 'web-editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/WebEditorView.vue')
  },
  {
    path: '/input-mask',
    name: 'input-mask',
    component: () => import(/* webpackChunkName: "about" */ '../views/InputMaskView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
