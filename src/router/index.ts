import { createRouter, createWebHistory } from 'vue-router'

// 导入首页组件
import Home from '@/views/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // 路由路径
      name: 'Home', // 路由名称
      component: Home, // 对应的组件
    },
  ],
})

export default router
