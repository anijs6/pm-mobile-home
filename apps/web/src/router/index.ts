import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  console.log('before hook')
})

router.afterEach(() => {
  console.log('after hook')
})
